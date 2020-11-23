import React from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/color';
import { Bold } from '../text/Typographies';

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Elliptical = styled.TouchableOpacity`
  background: ${colors.blue_signiture};
  width: 85%;
  height: 25%;
  border-radius: 100px;
  border: none;
  color: ${colors.white};
  align-items: center;
  justify-content: center;
`;

const Content = styled(Bold)`
  flex-direction: row;
  color: ${colors.white};
  align-self: center;
  font-size: 20px;
`;

export default function LoginButton() {
  return (
    <Container>
      <Elliptical>
        <Content>Log In</Content>
      </Elliptical>
    </Container>
  );
}
