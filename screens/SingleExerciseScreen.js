import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Layout from '../constants/Layout';


export default class SingleExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "This is Exercise",
  };

  render() {
      const { params } = this.props.navigation.state
    return (
      <ScrollView>
            <Text style={{fontSize: 24, fontWeight: '500'}}>{params.name} exercise</Text>
            <Text style={{fontSize: 24, fontWeight: '500'}}>{params.description} exercise</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});