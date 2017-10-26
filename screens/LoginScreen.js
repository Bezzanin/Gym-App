import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import LogInForm from '../components/LogInForm';
import RegistrationForm from '../components/RegistrationForm';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25, textAlign: 'center'}}>Welcome to Body Center</Text>
        <Image
        style={styles.backgroundImage}
          source={require('../assets/images/bg.jpg')}
        />
        
        <LogInForm />
        <RegistrationForm />


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
    flexDirection: 'column',
},
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    position: 'absolute'
  }
});
