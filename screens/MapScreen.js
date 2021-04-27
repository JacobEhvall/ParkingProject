import React from 'react';
import { Button, Text, View } from 'react-native';
import { auth } from '../firebase';

export default function MapScreen() {
  return (
    <View>
      <Text>Fungerar detta?</Text>
      <Button title="logga ut" onPress={() => auth.signOut()}></Button>
    </View>
  );
}
