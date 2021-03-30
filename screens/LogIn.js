import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>Log In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
