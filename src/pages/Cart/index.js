/* eslint-disable react/prop-types */
import React from 'react';
import { Button, View, Text } from 'react-native';

// import { Container } from './styles';

export default function Cart({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#191920',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>CART</Text>
      <Button title="To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
