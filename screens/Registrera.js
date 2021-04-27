import React, { useState } from 'react';
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
import UserModel from '../UserModel';
import { auth } from '../firebase';
import { db } from '../firebase';

export default function Registrera() {
  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [currentUser, setCurrentUser] = useState('');

  // const phonenumber = () => {
  //   navigation.navigate('PhoneNumberRegister');
  // };

  const SignUp = () => {
    auth.createUserWithEmailAndPassword(email, password).then(() => {
      // setCurrentUser(auth.currentUser);
      // console.log('UID', uid.apiKey);
      let currentUser = auth.currentUser;
      let uid = currentUser.uid;
      saveUserData(name, lastName, email, uid);
      console.log('user created');
    });
    const saveUserData = (name, lastName, email, uid) => {
      const user = {
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: '',
        userIsNew: true,
      };
      const car = {
        carName: '',
        regNumber: '',
      };

      db.collection('users').add(user);
      // db.collection('users').document(uid).collection('myCars').add(car);
    };
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <View style={styles.registrera}>
          <Text style={styles.title}>Fyll i ditt namn</Text>
          <TextInput
            placeholder="Förnamn"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#000"
            style={{
              backgroundColor: 'lightgray',
              padding: 12,
              margin: 10,
            }}
          />
          <TextInput
            placeholder="Efternamn"
            value={lastName}
            onChangeText={setLastname}
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
            value={email}
            onChangeText={setEmail}
            style={{
              backgroundColor: 'lightgray',
              padding: 12,
              margin: 10,
            }}
          />
          <TextInput
            placeholder="Lösenord"
            type="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#000"
            style={{
              backgroundColor: 'lightgray',
              padding: 12,
              margin: 10,
            }}
          />
          <TouchableOpacity onPress={SignUp}>
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
