import React from 'react';
import { Navigation } from 'react-native-navigation';
import styled from 'styled-components/native';
import Topbar from './Topbar';
import IconButton from '../button/IconButton';
import icons from '../../../assets/icons';
import { SCREEN_IDS } from '../../screens/constant';

export type Props = {
  componentId: string;
  title?: string;
};

const InfoButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

const BackButton = styled(IconButton)`
  width: 8px;
  height: 16px;
`;

const BackTopbar: React.FC<Omit<Props, 'iconSource' | 'iconStyle'>> = ({
  componentId,
  title
}: Props) => {
  return (
    <Topbar
      title={title}
      LeftComponent={
        <BackButton
          image={icons.backButton}
          hitSlopSize={16}
          onPress={() => {
            Navigation.pop(componentId);
          }}
        />
      }
      RightComponent={
        <InfoButton
          image={icons.information}
          hitSlopSize={23}
          onPress={() =>
            Navigation.push(componentId, {
              component: {
                name: SCREEN_IDS.SignUpScreen
              }
            })
          }
        />
      }
    />
  );
};
export default BackTopbar;
