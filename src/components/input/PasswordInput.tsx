import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import RNTextInput from './RNTextInput';
import colors from '../../styles/color';

const Container = styled.View`
  align-items: center;
`;

interface Props {
  containerWidth: string;
  containerHeight: string;
  marginTop: string;
  marginBottom: string;
}

const PasswordInput: React.FC<Props> = ({
  containerWidth,
  containerHeight,
  marginTop,
  marginBottom
}: Props) => {
  const radius = 10;
  return (
    <Container
      style={{
        width: containerWidth,
        height: containerHeight,
        marginTop,
        marginBottom
      }}
    >
      <RNTextInput
        borderTopLeftRadius={radius}
        borderTopRightRadius={radius}
        borderBottomLeftRadius={radius}
        borderBottomRightRadius={radius}
        placeHolder=" Password"
        placeholderTextColor={colors.gray500}
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
