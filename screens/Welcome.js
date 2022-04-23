import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  Colors,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  Avatar,
  WelcomeImage,
} from './../components/styles';
import foodLogo from './../assets/img/food.jpg';

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={foodLogo} />
        <WelcomeContainer>
          <PageTitle welcome={true}>Uber Eats</PageTitle>
          <SubTitle wecome={true}>Krishna</SubTitle>
          <SubTitle wecome={true}>krishna@test.com</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={foodLogo} />
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
