import React from 'react';
import styled from 'styled-components/native';
import RNText from 'src/components/text/RNText';
import colors from '../../styles/color';

interface Props {
  containerWidth: string;
  containerHeight: string;
  title: string;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Title = styled(RNText).attrs({
  fontType: 'BOLD',
  textColor: colors.black,
})`
  font-size: 40px;
`;

const Board: React.FC<Props> = ({
  containerWidth,
  containerHeight,
  title,
}: Props) => {
  return (
    <Container
      style={{
        width: containerWidth,
        height: containerHeight,
      }}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Board;
