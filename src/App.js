/**
 * Created by Sha Senevirathna on 31/12/22.
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import TextFieldAnimated from './components/TextFieldAnimated';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Floating Label Text Field</Text>
        <TextFieldAnimated
          label="Name"
          // onChangeText={ () => {} }
          placeholder={'Name'}
        />
        <TextFieldAnimated label="Handle" placeholder={'Handle'} />
        <TextFieldAnimated label="Email" placeholder={'Email'} />
        <StatusBar style="auto" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'left',
    margin: 25,
    color: '#60646f',
    marginLeft: 30,
  },
});