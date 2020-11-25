import React from 'react';
import styled from 'styled-components/native';
import BackTopbar from '../../topbar/BackTopbar';
import colors from '../../../styles/color';
import ContainerWithStatusBar from '../../container/ContainerWithStatusBar';
import SignInSection from '../../section/SignInSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
`;

const RegionalChatScreen: React.FC = () => {
  return (
    <Container statusBarColor={colors.red20}>
      <BackTopbar title="Wangsimni" />
      <SignInSection />
    </Container>
  );
};

export default RegionalChatScreen;
