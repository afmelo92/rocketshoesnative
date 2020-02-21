/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductList,
  ProductContainer,
  ProductInfos,
  ProductImage,
  ProductTitle,
  ProductActions,
  ActionsControls,
  ActionButton,
  AmountText,
  SubtotalText,
  Footer,
  TotalText,
  TotalPrice,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductList
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductContainer>
            <ProductInfos>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <TouchableOpacity
                onPress={() => dispatch(CartActions.removeFromCart(item.id))}
              >
                <Icon name="delete" size={25} color="#7159c1" />
              </TouchableOpacity>
            </ProductInfos>
            <ProductActions>
              <ActionsControls>
                <ActionButton onPress={() => decrement(item)}>
                  <Icon name="remove-circle" size={25} color="#7159c1" />
                </ActionButton>
                <AmountText>{item.amount}</AmountText>
                <ActionButton onPress={() => increment(item)}>
                  <Icon name="add-circle" size={25} color="#7159c1" />
                </ActionButton>
              </ActionsControls>
              <SubtotalText>{item.subtotal}</SubtotalText>
            </ProductActions>
          </ProductContainer>
        )}
      />
      <Footer>
        <TotalText>Total</TotalText>
        <TotalPrice>{total}</TotalPrice>
        <CheckoutButton>
          <CheckoutButtonText>Finalizar Pedido</CheckoutButtonText>
        </CheckoutButton>
      </Footer>
    </Container>
  );
}
