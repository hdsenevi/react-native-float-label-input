/**
 * Created by sha on 7/5/17.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import TextFieldAnimated from './components/TextFieldAnimated';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.welcome}>Floating Label Text Field</Text>
        <TextFieldAnimated
          label="Name"
          // onChangeText={ () => {} }
          placeholder={'Name'}
        />
        <TextFieldAnimated label="Handle" placeholder={'Handle'} />
        <TextFieldAnimated label="Email" placeholder={'Email'} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'left',
    margin: 25,
    color: '#60646f',
    marginLeft: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
