import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/LogIn';
import Registrera from './screens/Registrera';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          options={{ headerShown: false }}
          name="LogIn"
          component={LogIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registrera"
          component={Registrera}
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
