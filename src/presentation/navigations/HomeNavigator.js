import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../../common/constants/routeNames';
import ContactDetails from '../../ui/screens/ContactDetails';
import Contacts from '../../ui/screens/Contacts';
import CreateContact from '../../ui/screens/CreateContact';
import Settings from '../../ui/screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
