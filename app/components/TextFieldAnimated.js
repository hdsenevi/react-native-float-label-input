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

const TEXT_ANIMATION_DURATION = 250;
const TEXT_OFFSET_Y = 15;

const TextFieldAnimationState = {
    Default: 1,
    FocusedFloatedPlaceholder: 2,
    UnfocusedFloatedPlaceholder: 3,
};

class TextFieldAnimated extends Component {

    constructor(props) {
        super(props);

        this.tfAnimState = TextFieldAnimationState.Default;

        const position = new Animated.ValueXY();
        position.setValue({ x: 0, y: TEXT_OFFSET_Y });
        this.position = position;

        this.textOpacity = new Animated.Value(0);

        this.placeholderColorFocused = new Animated.Value(0);
        this.placeholderColor = this.placeholderColorFocused.interpolate({
            inputRange: [0, 1],
            outputRange: ['#177dfb', '#c6c0bf']
        });
    }

    componentDidMount() {

    }

    getPlaceholderStyle() {
        return {
            ...this.position.getLayout(),
            opacity: this.textOpacity,
            color: this.placeholderColor,
        };
    }

    onTextFieldTextChange(changedText) {
        const inputLength = changedText.length;

        console.log(`inputLength : ${inputLength} | state : ${this.tfAnimState}`);

        if (inputLength === 0) {
            // Reverse placeholder Animation to default place holder!!!

            Animated.timing(this.position, {
                toValue: { x: 0, y: TEXT_OFFSET_Y },
                duration: TEXT_ANIMATION_DURATION,
            }).start();

            Animated.timing(this.textOpacity, {
                toValue: 0,
                duration: TEXT_ANIMATION_DURATION,
            }).start();

            this.tfAnimState = TextFieldAnimationState.Default;
            return
        }

        if (inputLength > 0 && this.tfAnimState === TextFieldAnimationState.Default) {
            // placeholder animate into place

            Animated.timing(this.position, {
                toValue: { x: 0, y: 0 },
                duration: TEXT_ANIMATION_DURATION,
            }).start();

            Animated.timing(this.textOpacity, {
                toValue: 1,
                duration: TEXT_ANIMATION_DURATION,
            }).start();

            this.tfAnimState = TextFieldAnimationState.FocusedFloatedPlaceholder;
        }
    }

    onTextFieldUnfocused() {
        this.placeholderColorFocused.setValue(0);
        Animated.timing(this.placeholderColorFocused, {
            toValue: 1,
            duration: TEXT_ANIMATION_DURATION,
        }).start();

        console.log(`placeholderColorFocused :${this.placeholderColorFocused.toString()}`);
    }

    onTextFieldFocused() {
        this.placeholderColorFocused.setValue(1);
        Animated.timing(this.placeholderColorFocused, {
            toValue: 0,
            duration: TEXT_ANIMATION_DURATION,
        }).start();

        // this.tfAnimState = TextFieldAnimationState.FocusedFloatedPlaceholder;
        console.log(`placeholderColorFocused :${this.placeholderColorFocused.toString()}`);
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
                        onFocus={ () => {
                            console.log(`onFocus : ${label}`);
                            this.onTextFieldFocused();
                        }}
                        onBlur={ () => {
                            console.log(`onBlur : ${label}`);
                            this.onTextFieldUnfocused();
                        }}
                    />
                </View>
            </TextFieldContainer>
        );
    }
}

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
        // color: '#177dfb',
    },
    containerStyle: {
        height: 40,
    },
};

export default TextFieldAnimated;
