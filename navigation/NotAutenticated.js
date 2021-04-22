import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import PhoneNumberRegister from '../screens/PhoneNumberRegister';
import ChoosePassword from '../screens/ChoosePassword';
import Registrera from '../screens/Registrera';
import Lösenord from '../screens/Lösenord';

const Stack = createStackNavigator();

export default function NotAutenticated() {
  return (
    <Stack.Navigator initialRouteName="LogIn">
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen
        name="PhoneNumberRegister"
        component={PhoneNumberRegister}
      />
      <Stack.Screen name="ChoosePassword" component={ChoosePassword} />
      <Stack.Screen name="Registrera" component={Registrera} />
      <Stack.Screen name="Lösenord" component={Lösenord} />
    </Stack.Navigator>
  );
}
