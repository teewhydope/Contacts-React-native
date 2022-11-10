import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN, SIGNUP} from '../../common/constants/routeNames';
import Login from '../../ui/screens/Login';
import SignUp from '../../ui/screens/SignUp';

export type AuthNavigatorParamList = {
  Login: undefined;
  SignUp: undefined;
};

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator<AuthNavigatorParamList>();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={SIGNUP} component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
