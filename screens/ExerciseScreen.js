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
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';

export default class ExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "Exercises"
  };
  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      this.setState({
        exercises: exercises
      })
    });
  }

  handlePress(name, description, type) {
    console.log(type)
    this.props.navigation.navigate('SingleExercise', {name: name, description: description, type: type})
  }

    // filterExercises(name) {
    //   // Don't manipulate state directly, get a copy and then modify
    //   let newExercises = Object.values(this.state.exercises).slice().filter((item) => {
    //     return item.type = name;
    //   })
    //   this.setState({
    //     exercises: newExercises
    //   })
    // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Button
        title="Only basic"
        onPress={ () => {this.filterExercises('basic')}}/>
        <Button
        title="Only others"
        onPress={ () => {this.filterExercises('others')}}/>
        <Button
        title="Only isolation"
        onPress={ () => {this.filterExercises('isolation')}}/>

        <FlatList
          data={Object.values(this.state.exercises)}
          renderItem={({item}) =>
          <ImageExercise
            title={item.name}
            id={item.name}
            type={item.type}
            handlePress={() => {this.handlePress(item.name, item.description, item.type)}}
            description={item.description}
            imageSource={item.url}/>}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});