import React, {useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';

import {signupStart} from '../store/auth/auth.actions';

import axios from 'axios';

import {Button, Block, Input, Text} from '../components';
import {theme} from '../constants';
import SignIn from './SignIn';

const VALID_EMAIL = 'admin@skilltransfers.com';
const VALID_PASSWORD = '123456';

const SignUp = ({navigation, onSignupStart}) => {
  const [userData, setUserData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const {email, password, fullname} = userData;
  const hostname = '192.168.0.7';
  const port = '3000';

  const inputChangeHandler = (inputName, inputValue) => {
    console.log('event value>>>', inputName, inputValue);
    setUserData({
      ...userData,
      [inputName]: inputValue,
    });
  };

  const onClickSignUp = async () => {
    try {
      // here place your signup logic
      console.log('on signUp', userData);
      // app.listen(port, hostname, () => {
      //   console.log(`Server running at http://${hostname}:${port}/`);
      // });

      await axios
        .post(`http://${hostname}:${port}/api/user/register`, userData)
        .then(function (response) {
          console.log('error signup response', response);
        });
      console.log('user successfully signed up!: ');
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  const signUpClick = () => {
    onSignupStart(userData);
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={theme.sizes.base * 2}>
        <Text h1 bold>
          Sign Up
        </Text>
        <Block middle>
          <TextInput
            label="Full-name"
            style={[styles.input]}
            value={fullname}
            name="fullname"
            placeholder="Full Name"
            onChangeText={(value) => inputChangeHandler('fullname', value)}
          />
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
          <Button gradient>
            <Text bold center>
              Sign Up
            </Text>
          </Button>

          <Button>
            <Text gray caption center style={{textDecorationLine: 'underline'}}>
              Forgot your password?
            </Text>
          </Button>
          <Text
            title="Push Settings Screen"
            color="#710ce3"
            onPress={() => navigation.navigate('SignIn')}>
            SignIn
          </Text>
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

const mapDispatchToProps = (dispatch) => ({
  onSignupStart: (userData) => dispatch(signupStart(userData)),
});

export default connect(null, mapDispatchToProps)(SignUp);
