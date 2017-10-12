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
      feedback: '',
      name: '',
      uid: '',
      details: {name: null, weight: null, height: null}
    }
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      this.setState({
        exercises: exercises
      })
    });
    
    Database.authState((user) => {
      this.setState({uid: user.uid}, () =>{
        Database.getUserData(this.state.uid, (details) => {
          this.setState({
            details: details
          })
        });
      })
    })

  }

  sendFeedback(){
    Database.sendFeedback(this.state.feedback);
  }

  logout() {
    Database.logout();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={{fontSize: 25}}>Welcome to the App {this.state.details.name}</Text>
        <Text style={{fontSize: 25}}>Your Weight {this.state.details.weight}</Text>
        <Text style={{fontSize: 25}}>Your Height {this.state.details.height}</Text>
      
        <Button
        title="Log out"
        onPress={() => {this.logout()}}/>
        <Button
          title="Log user Details"
          onPress={() => {console.log(this.state.details)}}/>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(feedback) => this.setState({feedback})}
            value={this.state.feedback}
          />
          <Button
            title="Send Feedback"
            onPress={() => {this.sendFeedback()}}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
