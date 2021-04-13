import React from 'react';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function ChoosePassword({ navigation }) {
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  const submit = () => {
    navigation.navigate('ChoosePassword');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
        <View>
          <Text style={styles.title}>Välj nytt lösenord</Text>
          <TextInput
            autoFocus={true}
            placeholder="Nytt lösenord"
            placeholderTextColor="#000"
            //value={email}
            //onChangeText={setEmail}
            style={{
              width: 300,
              backgroundColor: 'white',
              padding: 8,
              margin: 15,
              borderRadius: 40,
            }}
          />
          <TextInput
            autoFocus={true}
            placeholder="Bekräfta nytt lösenord"
            placeholderTextColor="#000"
            //value={password}
            // onChangeText={setPassword}
            style={{
              width: 300,
              padding: 8,
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 40,
            }}
          />
          <TouchableOpacity style={styles.roundedButton}>
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
    backgroundColor: '#2f084a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    margin: 10,
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
