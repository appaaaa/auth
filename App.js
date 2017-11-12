import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';


class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp ({
      apiKey: "AIzaSyDcCpL-88nrIPY0Hn7gXmsgJRgJgMIETCA",
      authDomain: "auth-6c4e0.firebaseapp.com",
      databaseURL: "https://auth-6c4e0.firebaseio.com",
      projectId: "auth-6c4e0",
      storageBucket: "auth-6c4e0.appspot.com",
      messagingSenderId: "997528371464"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
