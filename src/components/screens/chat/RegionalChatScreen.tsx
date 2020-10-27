import React from 'react';
import styled from 'styled-components/native';
import BackTopbar from '../../topbar/BackTopbar';
import colors from '../../../styles/color';
import ContainerWithStatusBar from '../../container/ContainerWithStatusBar';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
`;

// children,
//   style,
//   statusBarColor

const RegionalChatScreen: React.FC = () => {
  return (
    <Container statusBarColor={colors.red20}>
      <BackTopbar title="Wangsimni" />
    </Container>
  );
};

export default RegionalChatScreen;
