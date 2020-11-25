import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import RNTextInput from './RNTextInput';

const Container = styled.View`
  align-items: center;
`;

const PasswordInput: React.FC = () => {
  return (
    <Container>
      <RNTextInput containerStyle={styles.BLOCK_SIZE} placeHolder="Password" />
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
