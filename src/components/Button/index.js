import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './styles';

import googleIcon from '../../assets/google.png';
import Card from '../Card';

const Button = () => {
  return (
    <Card onPress={() => {}} style={styles.buttonContainer}>
      <Image source={googleIcon} />
      <View>
        <Text style={styles.buttonText}>Sign In With Google</Text>
      </View>
      <View />
    </Card>
  );
};

export default Button;
