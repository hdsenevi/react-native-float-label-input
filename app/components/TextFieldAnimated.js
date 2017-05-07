/**
 * Created by sha on 7/5/17.
 */

import React, { Component } from 'react';
import {
    TextInput,
    View,
    Text,
    Animated,
} from 'react-native';
import TextFieldContainer from './TextFieldContainer';

const TextFieldAnimationState = {
    Default: 1,
    FocusedFloatedPlaceholder: 2,
    UnfocusedFloatedPlaceholder: 3,
};

class TextFieldAnimated extends Component {

    constructor(props) {
        super(props);

        tfAnimState = TextFieldAnimationState.Default;

        // position = new Animated.ValueXY();
        const position = new Animated.ValueXY();
        position.setValue({ x: 0, y: 17 });
        this.position = position;

        const op = new Animated.Value(0);
        this.textOpacity = op;
    }

    componentDidMount() {
    }

    getPlaceholderStyle() {
        return {
            ...this.position.getLayout(),
            opacity: this.textOpacity
        };
    }

    onTextFieldTextChange(changedText) {
        const inputLength = changedText.length;

        console.log(inputLength);

        if (inputLength == 0) {
            console.log('Reverse placeholder Animtion to default place holder!!!');
            tfAnimState = TextFieldAnimationState.Default;
            return
        }

        if (inputLength > 0 && tfAnimState === TextFieldAnimationState.Default) {
            console.log('placeholder ANIMATE!!!');

            Animated.timing(this.position, {
                toValue: { x: 0, y: 0 },
                duration: 250,
            }).start();
            Animated.timing(this.textOpacity, {
                toValue: 1,
                duration: 250,
            }).start();

            tfAnimState = TextFieldAnimationState.FocusedFloatedPlaceholder;
        }
    }

    render() {
        const { inputStyle, labelStyle, containerStyle } = styles;
        const { label, value, onChangeText, placeholder, secureTextEntry } = this.props;

        return (
            <TextFieldContainer>
                <View style={containerStyle}>
                    <Animated.Text
                        style={[this.getPlaceholderStyle(), styles.labelStyle]}
                    >
                        {label}
                    </Animated.Text>

                    <TextInput
                        style={inputStyle}
                        secureTextEntry={secureTextEntry}
                        autoCorrect={false}
                        placeholder={placeholder}
                        placeholderTextColor="#b6b6b6"
                        value={value}
                        onChangeText= {
                            // the call back for the caller to take any actions on
                            // onChangeText('text')
                            (changedText) => {
                                console.log(changedText);

                                this.onTextFieldTextChange(changedText);
                            }
                        }
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
