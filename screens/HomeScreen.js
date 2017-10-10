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

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
   title: "Home"
  };
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
    }
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      console.log(exercises);
      this.setState({
        exercises: exercises
      })
    });
    Database.authState((user) => {
      let initialMessage = user ? 'Welcome, user' : 'Please, log in';

      this.setState({
        user: user,
        initialMessage: initialMessage,
      })
    });
  }
  register() {
    Database.register(this.state.email, this.state.password);
  }

  login() {
    Database.login(this.state.email, this.state.password);
  }

  logout() {
    Database.logout();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={{fontSize: 25}}>{this.state.initialMessage}</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
      />
      <TextInput
        secureTextEntry
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />
      <Button
        title="log user state"
        onPress={() => {console.log(this.state.user)}}/>
      <Button
        title="Register"
        onPress={() => {this.register()}}/>
        <Button
        title="Log in"
        onPress={() => {this.login()}}/>
        <Button
        title="Log out"
        onPress={() => {this.logout()}}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
