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


export default class ExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "Exercise"
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView>
            <Text>Hello World {params.user}</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});