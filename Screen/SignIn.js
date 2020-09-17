import React, {useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from 'react-native';
import axios from 'axios';

import {Button, Block, Input, Text} from '../components';
import {theme} from '../constants';

const VALID_EMAIL = 'admin@skilltransfers.com';
const VALID_PASSWORD = '123456';

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = userData;
  const hostname = '192.168.0.7';
  const port = '3000';

  const inputChangeHandler = (inputName, inputValue) => {
    console.log('event value>>>', inputName, inputValue);
    setUserData({
      ...userData,
      [inputName]: inputValue,
    });
  };

  const onClickLogIn = async () => {
    try {
      // here place your signup logic
      console.log('signIN data', userData);
      // app.listen(port, hostname, () => {
      //   console.log(`Server running at http://${hostname}:${port}/`);
      // });

      await axios
        .post(`http://${hostname}:${port}/api/user/login`, userData)
        .then(function (response) {
          console.log(response);
        });
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={theme.sizes.base * 2}>
        <Text h1 bold>
          Log In
        </Text>
        <Block middle>
          <TextInput
            label="Email"
            style={[styles.input]}
            value={email}
            name="email"
            placeholder="Email"
            onChangeText={(value) => inputChangeHandler('email', value)}
          />
          <TextInput
            secure
            label="Password"
            type="password"
            style={[styles.input]}
            value={password}
            name="password"
            placeholder="Password"
            onChangeText={(value) => inputChangeHandler('password', value)}
          />
          <Button gradient onPress={onClickLogIn}>
            <Text bold center style={{cursor: 'pointer'}}>
              Sign In
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

export default SignIn;
