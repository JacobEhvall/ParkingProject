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

export default function VerifySmsCode() {
  // let textInput = useRef(null);
  const numberInput = 4;
  // const [internalVal, setInterVal] = useState('');

  // const onChangeText = (val) => {};

  // useEffect(() => {
  //   TextInput.focus();
  // }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : null}
        style={styles.registrera}
      >
        <Text style={styles.title}>Skriv in den kod du fick på SMS</Text>
        <View>
          <TextInput
            //ref={(input) => (textInput = input)}
            //onChangeText={onChangeText}
            //style={{ width: 0, height: 0 }}
            //value={number}
            //maxLength={numberInput}
            returnKeyType="done"
          />
        </View>
        <View style={styles.containerInput}>
          {Array(numberInput)
            .fill()
            .map((data, index) => (
              <View style={styles.cellView}></View>
            ))}
        </View>
        <TouchableOpacity>
          <Image
            source={require('../assets/arrow.png')}
            style={styles.roundedButton}
          />
        </TouchableOpacity>
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
    fontSize: 28,
    textAlign: 'center',
    color: '#FFF',
  },
  roundedButton: {
    margin: 20,
    width: 60,
    height: 60,
    borderRadius: 100,
    padding: 20,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'white',
  },
});
