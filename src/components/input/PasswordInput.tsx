import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import RNTextInput from './RNTextInput';
import colors from '../../styles/color';

const Container = styled.View`
  align-items: center;
`;

const PasswordInput: React.FC = () => {
  return (
    <Container>
      <RNTextInput
        placeHolder="Password"
        containerHeight="10%"
        containerWidth="10%"
        placeholderTextColor={colors.black}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  BLOCK_SIZE: {
    height: '23%',
    width: '85%'
  }
});

export default PasswordInput;
