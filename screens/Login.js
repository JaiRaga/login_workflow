import React, {useState} from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  Colors,
  StyledInputLabel,
  StyledTextInput,
  RighttIcon,
} from './../components/styles';
import foodLogo from './../assets/img/food2.jpg';

const { brand, darkLight } = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true)
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
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="Krishna@Pappa.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RighttIcon onPress={() => setHidePassword(!hidePassword)}>
            <Ionicons name={hidePassword ? 'md-eye-off' : "md-eye"} size={30} color={darkLight} />
        </RighttIcon>
      )}
    </View>
  );
};

export default Login;
