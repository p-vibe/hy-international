import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import IconButton from '../button/IconButton';
import icons from '../../../assets/icons';

interface Props extends TouchableOpacityProps {
  hitSlopSize?: number;
}

const BackButton = styled(IconButton)`
  width: 8px;
  height: 16px;
`;

const BackIcon: React.FC<Omit<Props, 'image' | 'style'>> = ({
  hitSlopSize
}: Props) => {
  return <BackButton image={icons.backButton} hitSlopSize={hitSlopSize} />;
};

export default BackIcon;
