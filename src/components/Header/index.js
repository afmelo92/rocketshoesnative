/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Logo />
      </TouchableOpacity>
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={30} color="#FFF" />
        <ItemCount>{cartSize}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
