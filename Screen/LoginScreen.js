import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import axios from 'axios';

const LogIn = () => {
  const [userData, setUserData] = useState({
    password: '',
    email: '',
  });
  const {password, email} = userData;

  const hostname = '192.168.0.7';
  const port = '3000';

  const onChangeText = (key, val) => {
    setUserData({...userData, [key]: val});
  };

  const onClickSignUp = async () => {
    try {
      // here place your signup logic
      console.log('on signUp', userData);
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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          name="email"
          value={email}
          onChangeText={(email) => onChangeText('email', email)}
          keyboardType="email-address"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          name="password"
          value={password}
          onChangeText={(password) => onChangeText('password', password)}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.signupButton]}
        onPress={onClickSignUp}>
        <Text style={styles.signUpText}>Log In</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#FF4DFF',
  },
  signUpText: {
    color: 'white',
  },
});

export default LogIn;
