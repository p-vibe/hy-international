import React from 'react';
import styled from 'styled-components/native';
import RNText from '../text/RNText';
import colors from '../../styles/color';

interface Props {
  containerWidth: string;
  containerHeight: string;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Title = styled(RNText).attrs({
  fontType: 'BOLD',
  textColor: colors.black
})`
  font-size: 40px;
`;

const Signboard: React.FC<Props> = ({
  containerWidth,
  containerHeight
}: Props) => {
  return (
    <Container
      style={{
        width: containerWidth,
        height: containerHeight
      }}
    >
      <Title>Sign In</Title>
    </Container>
  );
};

export default Signboard;
