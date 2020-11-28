import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from '../../components/container/ContainerWithStatusBar';
import colors from '../../styles/color';
import BackTopbar from '../../components/topbar/BackTopbar';
import SignInSection from '../../components/section/SignInSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
`;

const RegionalChatScreen: React.FC = () => {
  return (
    <Container statusBarColor={colors.red20}>
      <SignInSection />
    </Container>
  );
};

export default RegionalChatScreen;
