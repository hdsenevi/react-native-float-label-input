/**
 * Created by sha on 7/5/17.
 */
import React from 'react';
import { View } from 'react-native';

const TextFieldContainer = (props) => {
    // if we pass one component to another it will show up in props.children
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#d5d5d5',
        borderWidth: 0,
        borderBottomWidth: 1,
        elevation: 1,
        marginLeft: 25,
        marginRight: 5,
        marginTop: 5
    }
};

export default TextFieldContainer;
