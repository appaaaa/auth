import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp ({
      apiKey: "AIzaSyDcCpL-88nrIPY0Hn7gXmsgJRgJgMIETCA",
      authDomain: "auth-6c4e0.firebaseapp.com",
      databaseURL: "https://auth-6c4e0.firebaseio.com",
      projectId: "auth-6c4e0",
      storageBucket: "auth-6c4e0.appspot.com",
      messagingSenderId: "997528371464"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm/>
      </View>
    )
  }
}

export default App;
