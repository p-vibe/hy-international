import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import colors from '../../styles/color';

type FontType = 'BOLD' | 'REGULAR' | 'LIGHT';

const fontTypeToFont: { [key in FontType]: string } = {
  BOLD: 'ProximaNova-Bold',
  REGULAR: 'ProximaNova-Regular',
  LIGHT: 'ProximaNovaA-Light'
};

const Container = styled.TextInput`
  color: ${colors.gray450};
  background: ${colors.gray_1};
  border: solid ${colors.gray_2};
  border-radius: 10px;
  font-size: 18px;
  font-family: ${fontTypeToFont.REGULAR};
`;

interface Props extends TextInputProps {
  containerStyle: StyleProp<ViewStyle>;
  placeHolder: string;
}

export default function RNTextInput({ containerStyle, placeHolder }: Props) {
  return (
    <Container
      style={containerStyle}
      placeholder={placeHolder}
      placeholderTextColor={colors.gray500}
    />
  );
}
