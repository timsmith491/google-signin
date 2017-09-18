/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import GoogleSignIn from 'react-native-google-sign-in';


export default class googleAuth extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <TouchableHighlight style={styles.buttonStyle} onPress={async () => {
          await GoogleSignIn.configure({
            clientID: '387614752364-757n5irliuapbfejtt5publdermgu1hr.apps.googleusercontent.com',
            scopes: ['openid', 'email', 'profile'],
            shouldFetchBasicProfile: true,
          });

          const user = await GoogleSignIn.signInPromise();
          setTimeout(() => {
            alert(JSON.stringify(user, null, '  '));
            console.log(JSON.stringify(user, null, '  '));

          }, 1500);
        }}>
          <Text style={styles.instructions}>
            Google Sign-In
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonStyle} onPress={async () => {
      
          const user = await GoogleSignIn.signOutPromise();
          setTimeout(() => {
            alert(JSON.stringify(user, null, '  '));
          }, 1500);
        }}>
          <Text style={styles.instructions}>
            Google Sign-Out
          </Text>

        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle: {
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F00',
    borderRadius: 5,
    margin: 10,

  },
});

AppRegistry.registerComponent('googleAuth', () => googleAuth);
