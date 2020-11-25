import styled from 'styled-components/native';
import React from 'react';
import colors from '../../styles/color';
import SignInButton from '../button/SignInButton';
import PasswordInput from '../input/PasswordInput';
import RNTextInput from '../input/RNTextInput';

const Container = styled.View`
  height: 100%;
  background: ${colors.white};
`;

const SignInSection: React.FC = () => {
  return (
    <Container>
      <PasswordInput />
      <SignInButton />
    </Container>
  );
};

export default SignInSection;
