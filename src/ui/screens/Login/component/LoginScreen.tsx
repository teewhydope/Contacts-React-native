import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SIGNUP} from '../../../../common/constants/routeNames';
import CustomButton from '../../../components/Button/CustomButton';
import Container from '../../../components/Container/Container';
import InputView from '../../../components/InputView/InputView';
import colors from '../../../theme/colors';
import {Typography} from '../../../theme/type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthNavigatorParamList} from '../../../../presentation/navigations/AuthNavigator';
import {Image, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity} from 'react-native';

type NavigationType = NativeStackNavigationProp<AuthNavigatorParamList, 'Login'>;

const LoginScreen = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const {navigate} = useNavigation<NavigationType>();

  async function navigateToSignUp() {
    navigate(SIGNUP);
  }

  useEffect(() => {});

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
      <Text style={LoginPageStyle.subtitle}>Please login here</Text>
      <InputView label="Username" placeholder="Enter username" error={'This field is required'} />
      <InputView
        label="Password"
        placeholder="Enter password"
        icon={<Text style={[{fontSize: Typography.titleMedium.fontSize}]}>HIDE</Text>}
      />
      <View style={{marginTop: 40}} />
      <CustomButton label="Login" />
      <View style={LoginPageStyle.footer}>
        <Text>Need a new account? </Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={LoginPageStyle.footerTextButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginScreen;

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
