/**
 * Created by sha on 7/5/17.
 */

import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import TextFieldContainer from './TextFieldContainer';

class TextFieldAnimated extends Component {
// const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    constructor(props) {
        super(props);
    }

    render() {
        const { inputStyle, labelStyle, containerStyle } = styles;
        const { label, value, onChangeText, placeholder, secureTextEntry } = this.props;

        return (
            <TextFieldContainer>
                <View style={containerStyle}>
                    <Text style={labelStyle}>
                        {label}
                    </Text>
                    <TextInput
                        style={inputStyle}
                        secureTextEntry={secureTextEntry}
                        autoCorrect={false}
                        placeholder={placeholder}
                        placeholderTextColor="#b6b6b6"
                        value={value}
                        onChangeText={onChangeText}
                    />
                </View>
            </TextFieldContainer>
        );
    }
};

const styles = {
    inputStyle: {
        color: '#343434',
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 9,
        paddingLeft: 5,
        flex: 1,
        fontWeight: 'bold',
        color: '#177dfb',
    },
    containerStyle: {
        height: 40,
    },
};

export default TextFieldAnimated;
