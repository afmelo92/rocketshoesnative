/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

function Cart({ cart, dispatch }) {
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
                onPress={() =>
                  dispatch({ type: 'REMOVE_FROM_CART', id: item.id })
                }
              >
                <Icon name="delete" size={25} color="#7159c1" />
              </TouchableOpacity>
            </ProductInfos>
            <ProductActions>
              <ActionsControls>
                <ActionButton>
                  <Icon name="remove-circle" size={25} color="#7159c1" />
                </ActionButton>
                <AmountText>{item.amount}</AmountText>
                <ActionButton>
                  <Icon name="add-circle" size={25} color="#7159c1" />
                </ActionButton>
              </ActionsControls>
              <SubtotalText>R$199,90</SubtotalText>
            </ProductActions>
          </ProductContainer>
        )}
      />
      <Footer>
        <TotalText>Total</TotalText>
        <TotalPrice>R$199,90</TotalPrice>
        <CheckoutButton>
          <CheckoutButtonText>Finalizar Pedido</CheckoutButtonText>
        </CheckoutButton>
      </Footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
