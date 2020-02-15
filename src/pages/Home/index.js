/* eslint-disable react/prop-types */
import React from 'react';
import { Button, View, Text } from 'react-native';

// import { Container } from './styles';

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#191920',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white' }}>Hello World WEB ONLINE!</Text>
      <Button title="To Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}
