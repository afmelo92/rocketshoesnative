/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
    </Stack.Navigator>
  );
}
