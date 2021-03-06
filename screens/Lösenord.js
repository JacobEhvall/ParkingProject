import React from 'react';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../firebase';

export default function Lösenord({ navigation }) {
  const [email, setEmail] = useState('');

  const button = () => {
    navigation.navigate('ChoosePassword');
  };

  const sendPassword = () => {
    return auth.sendPasswordResetEmail(email);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <View style={styles.registrera}>
          <Text style={styles.title}>Glömt Lösenordet?</Text>
          <TextInput
            placeholder="E-mail adress"
            placeholderTextColor="#000"
            value={email}
            onChangeText={setEmail}
            style={{
              backgroundColor: 'white',
              padding: 12,
              margin: 10,
            }}
          ></TextInput>
          <TouchableOpacity onPress={sendPassword}>
            <Text style={styles.lösenord}>Skicka nytt lösenord</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f084a',
  },
  registrera: {
    width: '70%',
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
  },
  title: {
    margin: 20,
    fontSize: 28,
    textAlign: 'center',
    color: '#FFF',
  },
  lösenord: {
    color: '#FFF',
    padding: 10,
    margin: 40,
    textAlign: 'center',
  },
});
