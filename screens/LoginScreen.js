import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';
import * as firebase from 'firebase';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';
import LogInForm from '../components/LogInForm'

export default class LoginScreen extends React.Component {

  handlePress() {
    console.log('1234567');
  }
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      user: 'nouser',
      initialMessage: '',
      feedback: '',
      name: '',
    }
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      this.setState({
        exercises: exercises
      })
    });
    /* Check if user is logged in. If he is, display welcome message */
    Database.authState((user) => {
      let initialMessage = user ? 'Welcome, user' : 'Please, log in';

      this.setState({
        user: user,
        initialMessage: initialMessage,
      })
    });
    
    /* We have to set interval here, because Firebase currentUser property is not initialized yet */
    let timeout = setInterval(() => {
      if (firebase.auth().currentUser !== null) {
        clearInterval(timeout);
        let uid = firebase.auth().currentUser.uid;
        this.setState({uid})
      }

    }, 500)
  }

  register() {
    Database.register(this.state.email, this.state.password);
    Database.addUserData(this.state.name, this.state.uid);
  }

  login() {
    Database.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <ScrollView style={{marginTop: 50}}>
        <Text style={{fontSize: 25}}>{this.state.initialMessage}</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
        placeholder={'Email'}
      />
      <TextInput
        secureTextEntry
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        placeholder={'Password'}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
        placeholder={'Name'}
      />
      
      <Button
        title="Register"
        onPress={() => {this.register()}}/>
        <Button
        title="Log in"
        onPress={() => {this.login()}}/>
        <LogInForm />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
