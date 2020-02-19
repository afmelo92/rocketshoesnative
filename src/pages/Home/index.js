/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
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

  componentDidMount() {
    this.load();
  }

  load = async () => {
    try {
      const response = await api.get('/products');

      this.setState({ products: response.data });
    } catch (err) {
      console.tron.log(err);
    }
  };

  renderProduct = ({ item }) => {
    return (
      <ProductContainer>
        <ProductImage source={{ uri: item.image }} />
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
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Wrapper>
        <Container>
          <FlatList
            horizontal
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderProduct}
          />
        </Container>
      </Wrapper>
    );
  }
}
