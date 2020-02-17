/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList } from 'react-native';

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
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Tênis Maneiro de Corrida',
      price: 'R$179,90',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Tênis Maneiro de Esporte',
      price: 'R$199,90',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145884842',
      title: 'Tênis Maneiro de Futebol com alças',
      price: 'R$99,90',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3a844428ba',
      title: 'Tênis Maneiro de Corrida',
      price: 'R$179,90',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbasda55a97f63',
      title: 'Tênis Maneiro de Esporte',
      price: 'R$199,90',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Tênis Maneiro de Futebol com alças',
      price: 'R$99,90',
    },
  ];

  return (
    <Wrapper>
      <Container>
        <FlatList
          horizontal
          data={DATA}
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
