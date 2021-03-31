import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

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
        <TouchableOpacity>
          <Text style={styles.underlinedtext}>Glömt ditt lösenord?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.underlinedtext}>Ny? Registera dig nu!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundedButton}>
          <Image source={require('../assets/arrow.png')} style={styles.title} />
        </TouchableOpacity>
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
  underlinedtext: {
    margin: 2,
    color: '#FFF',
    padding: 10,
    textDecorationLine: 'underline',
  },
  roundedButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
});
