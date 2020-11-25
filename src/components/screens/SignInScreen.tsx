import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from '../container/ContainerWithStatusBar';
import colors from '../../styles/color';
import DefaultTopbar from '../topbar/DefaultTopbar';
import SignInSection from '../section/SignInSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
`;

const SignInScreen: React.FC = () => {
  return (
    <Container statusBarColor={colors.blue_light}>
      <DefaultTopbar title="Hanyang International" />
      <SignInSection />
    </Container>
  );
};

export default SignInScreen;
