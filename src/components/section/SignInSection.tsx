import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../styles/color';
import SignInButton from '../button/SignInButton';
import PasswordInput from '../input/PasswordInput';
import EmailInput from '../input/EmailInput';
import RNTextInput from '../input/RNTextInput';

const Container = styled.View`
  height: 100%;
  background: ${colors.white};
  align-items: center;
`;

const SignInSection: React.FC = () => {
  return (
    <Container>
      <EmailInput containerWidth="90%" containerHeight="6%" />
    </Container>
  );
};

const styles = StyleSheet.create({
  EMAIL_CONTAINER: {
    height: '30%',
    width: '100%'
  }
});

export default SignInSection;
