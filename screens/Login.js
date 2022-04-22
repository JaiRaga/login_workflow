import React from 'react';
import {View} from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
} from './../components/styles';
import foodLogo from './../assets/img/food2.jpg';

const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={foodLogo} />
        <PageTitle>Uber Eats</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {(handleChange, handleBlur, handleSubmit, values) => (
            <StyledFormArea></StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({label, icon, ...props}) => {
  return (
    <View>
      
    </View>
  )
}

export default Login;
