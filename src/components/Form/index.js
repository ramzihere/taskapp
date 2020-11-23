//- libraries imports
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

//- styles imports
import {styles} from './styles';

//- components imports
import Input from '../Input';
import Card from '../Card';

// -Images imports
import emailIcon from '../../assets/email.png';
import lock from '../../assets/lock.png';
import arrow from '../../assets/arrow.png';

const Form = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _handleEmailChange = (text) => {
    setEmail(text);
  };
  const _handlePasswordChange = (text) => {
    setPassword(text);
  };
  return (
    <Card style={styles.loginForm}>
      <Input
        icon="email"
        value={email}
        onSubmit={_handleEmailChange}
        label="Email">
        <Image style={{width: 18, height: 15}} source={emailIcon} />
      </Input>
      <Input
        icon="lock"
        value={password}
        onSubmit={_handlePasswordChange}
        label="Password"
        secure>
        <Image style={{width: 18, height: 18}} source={lock} />
      </Input>
      <TouchableOpacity activeOpacity={0.7} style={styles.forgotButton}>
        <Text style={styles.forgotButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Card onPress={onSubmit} style={styles.loginButton}>
        <Image source={arrow} />
      </Card>
    </Card>
  );
};

export default Form;
