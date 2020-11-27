import React from 'react';
import styled from 'styled-components/native';
import colors from '../../styles/color';
import Board from '../board/Board';
import RNText from '../text/RNText';
import DefaultButton from '../button/DefaultButton';

const Container = styled.View`
  height: 100%;
  width: 90%;
`;

const ExplanationContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;
`;

const Explanation = styled(RNText).attrs({
  fontType: 'REGULAR'
})`
  font-size: 22px;
`;

const ChatRoomContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const ZoneSection: React.FC = () => {
  return (
    <Container>
      <Board
        containerWidth="100%"
        containerHeight="6%"
        title="Enter Chat Zone"
      />
      <ExplanationContainer>
        <Explanation>
          you can join chat room when you are near the location
        </Explanation>
      </ExplanationContainer>
      <ChatRoomContainer>
        <DefaultButton
          containerWidth="100%"
          containerHeight="6%"
          content="Wangsimni"
          ellipticalColor={colors.blue_signiture}
          textColor={colors.white}
          borderRadius="50px"
        />
      </ChatRoomContainer>
    </Container>
  );
};

export default ZoneSection;
