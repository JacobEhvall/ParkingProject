import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneNumberRegister from '../screens/PhoneNumberRegister';

const Stack = createStackNavigator();

export default function Authenticated() {
  return (
    <Stack.Navigator initialRouteName="PhoneNumberRegister">
      <Stack.Screen
        name="PhoneNumberRegister"
        component={PhoneNumberRegister}
      />
    </Stack.Navigator>
  );
}
