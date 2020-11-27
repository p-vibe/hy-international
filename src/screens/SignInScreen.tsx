import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from '../components/container/ContainerWithStatusBar';
import colors from '../styles/color';
import DefaultTopbar from '../components/topbar/DefaultTopbar';
import SignInSection from '../components/section/SignInSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
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
