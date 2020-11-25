import React from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/color';
import { Bold } from '../text/Typographies';

interface Props {
  containerWidth: string;
  containerHeight: string;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Elliptical = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background: ${colors.blue_signiture};
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

const SignInButton: React.FC<Props> = ({
  containerWidth,
  containerHeight
}: Props) => {
  return (
    <Container style={{ width: containerWidth, height: containerHeight }}>
      <Elliptical>
        <Content>Sign in</Content>
      </Elliptical>
    </Container>
  );
};

export default SignInButton;
