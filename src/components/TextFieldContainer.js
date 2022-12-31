/**
 * Created by Sha Senevirathna on 31/12/22.
 */
import React from 'react';
import {View} from 'react-native';

const TextFieldContainer = (props) => {
  // if we pass one component to another it will show up in props.children
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 0,
    borderRadius: 2,
    borderColor: '#d5d5d5',
    borderBottomWidth: 1,
    elevation: 1,
    marginLeft: 25,
    marginRight: 5,
    marginTop: 5,
  },
};

export default TextFieldContainer;
