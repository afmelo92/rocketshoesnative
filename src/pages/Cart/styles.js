import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background-color: #191920;
`;
export const Container = styled.View`
  flex: 1;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
`;

export const ProductList = styled.FlatList``;

export const ProductContainer = styled.View`
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const ProductInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;

export const ProductTitle = styled.Text`
  flex: 1;
`;

export const ProductActions = styled.View`
  background: #eee;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  border-radius: 4px;
`;

export const ActionsControls = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubtotalText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ActionButton = styled.TouchableOpacity``;

export const AmountText = styled.Text`
  width: 50px;
  text-align: center;
`;

export const Footer = styled.View``;

export const TotalText = styled.Text`
  margin-top: 10px;
  text-align: center;
  color: #7159c1;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TotalPrice = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const CheckoutButton = styled.TouchableOpacity`
  margin-top: 20px;
  background: #7159c1;
  height: 50px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const CheckoutButtonText = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 16px;
`;
