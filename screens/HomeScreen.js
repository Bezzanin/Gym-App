import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layout from '../constants/Layout';
import { StackNavigator } from 'react-navigation';

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
  render() {
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
          <Text>1234</Text>
          <InputTest value={'Placeholder'}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
