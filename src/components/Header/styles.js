import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #141419;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid white;
`;

export const Logo = styled.Image``;

export const Counter = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  left: 22px;
  bottom: 8px;
  z-index: 1;
`;

export const CountNumber = styled.Text`
  margin: 0;
  padding: 0;
  align-self: center;
  color: #fff;
  font-weight: bold;
`;

export const BasketButton = styled(RectButton)``;

export const Basket = styled(Icon)`
  color: #fff;
`;

export const LogoButton = styled(RectButton)``;
