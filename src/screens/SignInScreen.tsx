import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from '../components/container/ContainerWithStatusBar';
import colors from '../styles/color';
import SignInSection from '../components/section/SignInSection';
import BackTopbar from '../components/topbar/BackTopbar';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
  align-items: center;
`;

interface Props {
  componentId: string;
}

const SignInScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={colors.blue_light}>
      <BackTopbar componentId={componentId} />
      <SignInSection />
    </Container>
  );
};

export default SignInScreen;
