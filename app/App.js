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

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Animated Text Field example!
                </Text>

                <TextFieldAnimated
                    label="Title"
                    // value="This is the title"
                    onChangeText={ () => {} }
                    placeholder={'Title'}
                />
                <TextFieldAnimated
                    label="Price"
                    // value="This is the title"
                    onChangeText={ () => {} }
                    placeholder={'Name'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        backgroundColor: '#ffffff',
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