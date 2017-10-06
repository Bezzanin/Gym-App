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
      exercises: []
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

  handlePress(name, description) {
    this.props.navigation.navigate('SingleExercise', {name: name, description: description})
  }

    filterExercises(name) {
      // Don't manipulate state directly, get a copy and then modify
      let newExercises = Object.values(this.state.exercises).slice().filter((item) => {
        return item.type = name;
      })
      this.setState({
        exercises: newExercises
      })
    }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        
          <ScrollView
            horizontal
          >
              <ImageExercise
                handlePress={this.handlePress}
                title={'Bench press'}
                description={'Lorem ipsum dolor sit amet in vina veritas'}
                imageSource={require('../assets/images/exercises.jpg')}/>
                <ImageExercise
                title={'Cabel Row'}
                description={'Lorem ipsum dolor sit amet in vina veritas'}
                imageSource={require('../assets/images/exercises.jpg')}/>
                <ImageExercise
                title={'Dead lift'}
                description={'Lorem ipsum dolor sit amet in vina veritas'}
                imageSource={require('../assets/images/exercises.jpg')}/>
          </ScrollView>
      <Button
        title="Log state"
        onPress={() => console.log(this.state.exercises)}/>

        <Button
        onPress={() => navigate('SingleExercise', { name: 'Bechpress' })}
        title="Exercises"
        />

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
            handlePress={this.handlePress.bind(this)}
            description={item.type}
            imageSource={require('../assets/images/exercises.jpg')}/>}
          />
          <Text>1234</Text>
          <InputTest value={'Placeholder'}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
