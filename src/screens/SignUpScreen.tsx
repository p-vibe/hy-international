import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from '../components/container/ContainerWithStatusBar';
import colors from '../styles/color';
import SignUpSection from '../components/section/SignUpSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

const SignUpScreen: React.FC = () => {
  return (
    <Container statusBarColor={colors.blue_light}>
      <SignUpSection />
    </Container>
  );
};

export default SignUpScreen;
