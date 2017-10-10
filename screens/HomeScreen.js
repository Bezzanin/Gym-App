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
    }
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      console.log(exercises);
      this.setState({
        exercises: exercises
      })
    });
  }
  register() {
    Database.register(this.state.email, this.state.password);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
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
        title="Register"
        onPress={() => {this.register()}}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
