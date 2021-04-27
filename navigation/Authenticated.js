import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneNumberRegister from '../screens/PhoneNumberRegister';
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();

export default function Authenticated() {
  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen
        name="PhoneNumberRegister"
        component={PhoneNumberRegister}
      />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}
