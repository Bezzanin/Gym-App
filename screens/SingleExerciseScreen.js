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
            <Text>Sigle Exercise Here {params.name}</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});