import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from '../container/ContainerWithStatusBar';
import colors from '../../styles/color';
import ZoneSection from '../section/ZoneSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;
const ZoneScreen: React.FC = () => {
  return (
    <Container statusBarColor={colors.blue_light}>
      <ZoneSection />
    </Container>
  );
};

export default ZoneScreen;
