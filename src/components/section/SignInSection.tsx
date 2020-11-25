import styled from 'styled-components/native';
import React from 'react';
import colors from '../../styles/color';
import SignInButton from '../button/SignInButton';
import PasswordInput from '../input/PasswordInput';
import EmailInput from '../input/EmailInput';
import Signboard from '../signboard/Signboard';
import RNText from '../text/RNText';

const Container = styled.View`
  height: 100%;
  background: ${colors.white};
  align-items: center;
`;

const NoticeContainer = styled.View`
  width: 90%;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;
`;

const Title = styled(RNText).attrs({
  fontType: 'BOLD'
})`
  font-size: 22px;
`;

const NormalText = styled(RNText).attrs({
  fontType: 'REGULAR'
})`
  font-size: 17px;
`;

const ImportantText = styled(RNText).attrs({
  fontType: 'BOLD',
  textColor: colors.red500
})`
  font-size: 17px;
`;

const SignInSection: React.FC = () => {
  return (
    <Container>
      <Signboard containerWidth="100%" containerHeight="10%" />
      <EmailInput
        containerWidth="90%"
        containerHeight="6%"
        marginTop="5%"
        marginBottom="3%"
      />
      <PasswordInput
        containerWidth="90%"
        containerHeight="6%"
        marginTop="1%"
        marginBottom="3%"
      />
      <NoticeContainer>
        <Title>Notice!</Title>
        <NormalText>
          Only hanyang e-mail can be used.{' '}
          <ImportantText>
            Although you already registered in Hanyang Portal, you should sign
            up
          </ImportantText>{' '}
          cause this app is another system.
        </NormalText>
      </NoticeContainer>
      <SignInButton containerWidth="90%" containerHeight="6%" />
    </Container>
  );
};

export default SignInSection;
