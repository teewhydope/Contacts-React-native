import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {LOGIN} from '../../../../common/constants/routeNames';
import CustomButton from '../../../components/Button/CustomButton';
import Container from '../../../components/Container/Container';
import InputView from '../../../components/InputView/InputView';
import colors from '../../../theme/colors';
import {Typography} from '../../../theme/type';

import {Image, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity} from 'react-native';

const SignUpScreen = ({onChange, onSubmit, form, formErrors, apiError, loading}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const {navigate} = useNavigation();

  function navigateToLogin() {
    navigate(LOGIN);
  }

  useEffect(() => {
    console.log(loading, apiError);
    console.log(apiError, loading);
  });

  return (
    <Container>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={[
          LoginPageStyle.logoImage,
          {height: 0.2 * windowHeight},
          {width: windowWidth},
          {resizeMode: 'contain'},
        ]}
      />

      <Text style={LoginPageStyle.title}>Welcome to RNContacts</Text>
      <Text style={LoginPageStyle.subtitle}>Create a free account</Text>
      <InputView
        label="Username"
        placeholder="Enter username"
        onChangeText={value => {
          onChange({name: 'userName', value: value});
        }}
        error={formErrors?.userName || apiError?.username?.[0]}
      />
      <InputView
        label="First name"
        placeholder="Enter First name"
        onChangeText={value => {
          onChange({name: 'firstName', value: value});
        }}
        error={formErrors?.firstName || apiError?.first_name?.[0]}
      />
      <InputView
        label="Last name"
        placeholder="Enter Last name"
        onChangeText={value => {
          onChange({name: 'lastName', value: value});
        }}
        error={formErrors?.lastName || apiError?.last_name?.[0]}
      />
      <InputView
        label="Email"
        placeholder="Enter email"
        onChangeText={value => {
          onChange({name: 'email', value: value});
        }}
        error={formErrors?.email || apiError?.email?.[0]}
      />
      <InputView
        label="Password"
        placeholder="Enter password"
        onChangeText={value => {
          onChange({name: 'password', value: value});
        }}
        error={formErrors?.password || apiError?.password?.[0]}
        icon={<Text style={[{fontSize: Typography.titleMedium.fontSize}]}>HIDE</Text>}
      />
      <View style={{marginTop: 40}} />
      {apiError && (
        <View>
          <Text style={{alignContent: 'center', color: colors.danger}}>
            {JSON.stringify(apiError)}
          </Text>
        </View>
      )}
      <CustomButton label="Sign Up" onPress={onSubmit} loading={loading} />
      <View style={LoginPageStyle.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={LoginPageStyle.footerTextButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default SignUpScreen;

const LoginPageStyle = StyleSheet.create({
  logoImage: {
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: Typography.headlineLarge.fontSize,
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: Typography.headlineMedium.fontSize,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  footerTextButton: {
    color: colors.primary,
  },
});
