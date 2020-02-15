import styled from 'styled-components';
import logo from '../../assets/images/rocket_logo.png';

export const Container = styled.View`
  background: #141419;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Counter = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const CountNumber = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;

// export const BasketButton = styled(RectButton)``;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
