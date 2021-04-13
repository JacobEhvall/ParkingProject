import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/LogIn';
import Registrera from './screens/Registrera';
import PhoneNumberRegister from './screens/PhoneNumberRegister';
import VerifySmsCode from './screens/VerifySmsCode';
import Lösenord from './screens/Lösenord';
import ChoosePassword from './screens/ChoosePassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          options={{ headerShown: true }}
          name="LogIn"
          component={LogIn}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Registrera"
          component={Registrera}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="PhoneNumberRegister"
          component={PhoneNumberRegister}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="VerifySmsCode"
          component={VerifySmsCode}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Lösenord"
          component={Lösenord}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="ChoosePassword"
          component={ChoosePassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
