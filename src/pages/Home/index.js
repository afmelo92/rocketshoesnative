/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.load();
  }

  load = async () => {
    try {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      this.setState({ products: data });
    } catch (err) {
      console.tron.log(err);
    }
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;
    return (
      <ProductContainer>
        <ProductImage source={{ uri: item.image }} />
        <ProductDescription>{item.title}</ProductDescription>
        <ProductPrice>{item.priceFormatted}</ProductPrice>

        <ProductButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" size={15} color="#FFF" />
            <ProductCounter>{amount[item.id] || 0}</ProductCounter>
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
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
