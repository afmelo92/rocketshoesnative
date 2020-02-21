/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';
import { formatPrice } from '../../util/format';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

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

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <ProductContainer>
        <ProductImage source={{ uri: item.image }} />
        <ProductDescription>{item.title}</ProductDescription>
        <ProductPrice>{item.priceFormatted}</ProductPrice>

        <ProductButton onPress={() => handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" size={15} color="#FFF" />
            <ProductCounter>{amount[item.id] || 0}</ProductCounter>
          </ProductAmount>
          <ProductText>Adicionar ao carrinho</ProductText>
        </ProductButton>
      </ProductContainer>
    );
  }

  return (
    <Wrapper>
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={amount}
          keyExtractor={item => String(item.id)}
          renderItem={renderProduct}
        />
      </Container>
    </Wrapper>
  );
}
