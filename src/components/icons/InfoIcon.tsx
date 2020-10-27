import React from 'react';
import styled from 'styled-components/native';
import { ImageProps, TouchableOpacityProps } from 'react-native';
import IconButton from '../button/IconButton';
import icons from '../../../assets/icons';

interface Props extends TouchableOpacityProps {
  hitSlopSize?: number;
}

const InfoButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

const InfoIcon: React.FC<Omit<Props, 'image' | 'style'>> = ({
  hitSlopSize
}: Props) => {
  return <InfoButton image={icons.information} hitSlopSize={hitSlopSize} />;
};

export default InfoIcon;
