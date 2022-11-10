import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import React, {useContext} from 'react';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../provider';

const AppNavContainer = () => {
  LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
