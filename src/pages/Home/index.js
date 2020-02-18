/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';
import api from '../../services/api';

import {
  Wrapper,
  Container,
  ProductContainer,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ProductAmount,
  ProductCounter,
  ProductText,
  ProductButton,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: product.price,
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <Wrapper>
        <Container>
          <FlatList
            horizontal
            data={products}
            renderItem={({ item }) => (
              <ProductContainer key={item.id}>
                <ProductImage />
                <ProductDescription>{item.title}</ProductDescription>
                <ProductPrice>{item.price}</ProductPrice>

                <ProductButton>
                  <ProductAmount>
                    <Icon name="add-shopping-cart" size={15} color="#FFF" />
                    <ProductCounter>3</ProductCounter>
                  </ProductAmount>
                  <ProductText>Adicionar ao carrinho</ProductText>
                </ProductButton>
              </ProductContainer>
            )}
          />
        </Container>
      </Wrapper>
    );
  }
}
