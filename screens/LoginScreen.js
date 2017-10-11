import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LogInForm from '../components/LogInForm';
import RegistrationForm from '../components/RegistrationForm';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <ScrollView style={{marginTop: 50}}>
        <Text style={{fontSize: 25, textAlign: 'center'}}>Welcome to Body Center</Text>

        <LogInForm />
        <RegistrationForm />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
