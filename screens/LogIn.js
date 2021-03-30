import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '70%' }}>
        <Text style={styles.title}>Logga in</Text>
        <TextInput
          placeholder="E-mail adress"
          placeholderTextColor="#000"
          value={email}
          onChangeText={setEmail}
          style={{
            backgroundColor: 'lightgray',
            padding: 12,
            margin: 15,
          }}
        />
        <TextInput
          placeholder="Lösenord"
          placeholderTextColor="#000"
          value={password}
          onChangeText={setPassword}
          style={{ backgroundColor: 'lightgray', padding: 12, margin: 15 }}
        />
        <Button title="Submit" onPress={submit}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f084a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    margin: 20,
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
  },
});
