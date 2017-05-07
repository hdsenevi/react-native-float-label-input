/**
 * Created by sha on 7/5/17.
 */

import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class TextFieldAnimated extends Component {
// const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    constructor(props) {
        super(props);

        const { label, value, onChangeText, placeholder, secureTextEntry } = this.props;
    }
    render() {
        const { inputStyle, labelStyle, containerStyle } = styles;
        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>
                    {this.props.label}
                </Text>
                <TextInput
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    style={inputStyle}
                />
            </View>
        );
    }
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        // flex: 1,
        flexDirection: 'row',
        // alignItems: 'center'
    },
};

export default TextFieldAnimated;
