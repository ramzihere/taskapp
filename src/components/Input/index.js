import React from 'react';
import {View, Text, TextInput} from 'react-native';

import {styles} from './styles';

const Input = ({label, value, secure, onSubmit, children}) => {
  return (
    <>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
      <View style={styles.textInputContainer}>
        {children}
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onSubmit}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={secure}
        />
      </View>
    </>
  );
};

export default Input;
