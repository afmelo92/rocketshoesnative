import { darken } from 'polished';
import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #191920;
`;

export const Container = styled.View``;

export const ProductContainer = styled.View`
  width: 220px;
  background: #fff;
  border-radius: 4px;
  margin: 5px;
  padding: 5px;
`;

export const ProductImage = styled.View`
  background: red;
  width: 100%;
  height: 220px;
  border-radius: 5px;
`;

export const ProductDescription = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #777;
`;

export const ProductPrice = styled.Text`
  width: 100%;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ProductButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 10px;
  background: ${darken(0.1, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductCounter = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const ProductText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
