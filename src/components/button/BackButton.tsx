import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { Navigation } from 'react-native-navigation';
import IconButton from './IconButton';
import icons from '../../../assets/icons';
import { SCREEN_IDS } from '../../screens/constant';

interface Props extends TouchableOpacityProps {
  componentId: string;
  hitSlopSize?: number;
}

const Button = styled(IconButton)`
  width: 8px;
  height: 16px;
`;

const BackButton: React.FC<Omit<Props, 'image' | 'style'>> = ({
  componentId,
  hitSlopSize
}: Props) => {
  return (
    <Button
      image={icons.backButton}
      hitSlopSize={hitSlopSize}
      onPress={() =>
        Navigation.push(componentId, {
          component: {
            name: SCREEN_IDS.SignUpScreen
          }
        })
      }
    />
  );
};

export default BackButton;
