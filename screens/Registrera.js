import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Registera({ navigation }) {
  const phonenumber = () => {
    navigation.navigate('PhoneNumberRegister');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <View style={styles.registrera}>
          <Text style={styles.title}>Fyll i ditt namn</Text>
          <TextInput
            placeholder="Förnamn"
            placeholderTextColor="#000"
            style={{
              backgroundColor: 'lightgray',
              padding: 12,
              margin: 10,
            }}
          />
          <TextInput
            placeholder="Efternamn"
            placeholderTextColor="#000"
            style={{
              backgroundColor: 'lightgray',
              padding: 12,
              margin: 10,
            }}
          />
          <TextInput
            placeholder="E-mail adress"
            placeholderTextColor="#000"
            style={{
              backgroundColor: 'lightgray',
              padding: 12,
              margin: 10,
            }}
          />
          <TextInput
            placeholder="Lösenord"
            placeholderTextColor="#000"
            style={{
              backgroundColor: 'lightgray',
              padding: 12,
              margin: 10,
            }}
          />
          <TouchableOpacity onPress={phonenumber}>
            <Image
              source={require('../assets/arrow.png')}
              style={styles.roundedButton}
            />
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
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
  },
  roundedButton: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
});
