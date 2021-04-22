import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import 'react-native-gesture-handler';
import { AuthContext } from '../context/AuthContext';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const { logIn } = useContext(AuthContext);

  // const submit = () => {
  //   navigation.navigate('Registrera');
  // };

  const secretword = () => {
    navigation.navigate('Lösenord');
  };

  const continueButton = () => {
    console.log('submitting login');
    logIn(email, password);
  };

  const registerUser = () => {
    navigation.navigate('Registrera');
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '70%' }}>
        <Text style={styles.title}>Logga in</Text>
        <TextInput
          autoFocus={true}
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
        <TouchableOpacity onPress={secretword}>
          <Text style={styles.underlinedtext}>Glömt ditt lösenord?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={registerUser}>
          <Text style={styles.underlinedtext}>Ny? Registera dig nu!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundedButton}>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.roundedButton}
            onPress={continueButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default LogIn;

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
//https://www.youtube.com/watch?v=ePwViZY9l4A&ab_channel=AnbuZHobbieZ
