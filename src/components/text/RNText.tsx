import React from 'react';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/color';

type FontType = 'BOLD' | 'REGULAR' | 'LIGHT';

export interface ITextProps extends TextProps {
  fontType?: FontType;
  children: React.ReactNode;
}

const fontTypeToFont: { [key in FontType]: string } = {
  BOLD: 'ProximaNova-Bold',
  REGULAR: 'ProximaNova-Regular',
  LIGHT: 'ProximaNovaA-Light'
};

const Text = styled.Text<{ fontType: FontType }>`
  font-family: ${({ fontType }) => fontTypeToFont[fontType]};
  letter-spacing: -0.5px;
  include-font-padding: false;
`;

function RNText({ fontType = 'REGULAR', ...props }: ITextProps) {
  return <Text fontType={fontType} allowFontScaling={false} {...props} />;
}

export default RNText;
