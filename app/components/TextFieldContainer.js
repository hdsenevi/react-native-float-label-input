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
        borderColor: '#ddd',
        borderWidth: 0,
        borderBottomWidth: 1,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        elevation: 1,
        marginLeft: 25,
        marginRight: 5,
        marginTop: 10
    }
};

export default TextFieldContainer;
