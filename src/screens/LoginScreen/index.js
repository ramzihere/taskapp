import React from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import Form from '../../components/Form';
import Button from '../../components/Button';

const LoginScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.container}>
        <Form onSubmit={() => navigation.replace('Home')} />
        <View style={styles.optional}>
          <Text style={styles.optionalText}>or Sign in with</Text>
        </View>
        <Button />
        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Don't Have An Account? </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.accountText}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
