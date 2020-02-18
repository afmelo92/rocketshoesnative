/* eslint-disable react/prop-types */
import React from 'react';
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

export default function Cart({ navigation }) {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Tênis Maneiro de Corrida',
      price: 'R$179,90',
      amount: 1,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Tênis Maneiro de Esporte',
      price: 'R$199,90',
      amount: 3,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145884842',
      title: 'Tênis Maneiro de Futebol com alças',
      price: 'R$99,90',
      amount: 2,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3a844428ba',
      title: 'Tênis Maneiro de Corrida',
      price: 'R$179,90',
      amount: 0,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbasda55a97f63',
      title: 'Tênis Maneiro de Esporte',
      price: 'R$199,90',
      amount: 1,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Tênis Maneiro de Futebol com alças',
      price: 'R$99,90',
      amount: 1,
    },
  ];

  return (
    <Container>
      <ProductList
        data={DATA}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductContainer>
            <ProductInfos>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <TouchableOpacity>
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
