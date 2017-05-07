/**
 * Created by sha on 7/5/17.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import TextFieldAnimated from './components/TextFieldAnimated';
import TextFieldContainer from './components/TextFieldContainer';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Animated Text Field example!
                </Text>

                <TextFieldContainer>
                    <TextFieldAnimated
                        label="Title"
                        // value="This is the title"
                        onChangeText={ () => {} }
                        placeholder={'Placeholder'}
                    />
                </TextFieldContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 17,
        textAlign: 'left',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default App;