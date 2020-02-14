/* eslint-disable react/prop-types */
import React from 'react';
import logo from '../../assets/images/rocket_logo.png';

import {
  Container,
  Counter,
  CountNumber,
  Basket,
  Logo,
  BasketButton,
  LogoButton,
} from './styles';

export default function Header({ navigation }) {
  console.tron.log(navigation);

  return (
    <Container>
      <LogoButton onPress={() => navigation.navigate('Home')}>
        <Logo source={logo} />
      </LogoButton>
      <Counter>
        <CountNumber>5</CountNumber>
      </Counter>
      <BasketButton onPress={() => navigation.navigate('Cart')}>
        <Basket name="shopping-basket" size={30} color="#FFF" />
      </BasketButton>
    </Container>
  );
}
