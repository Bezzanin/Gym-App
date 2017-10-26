import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Layout from '../constants/Layout';


export default class SingleExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "This is Exercise",
  };
  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
  }

  handleClick() {
    this.props.navigation.navigate('MapScreen', {type: this.props.navigation.state.params.type})
  }

  render() {
      const { params } = this.props.navigation.state
    return (
      <ScrollView>
            <Text style={{fontSize: 24, fontWeight: '500'}}>{params.name} exercise</Text>
            <Text style={{fontSize: 24, fontWeight: '500'}}>{params.description} exercise</Text>
            <Text>{params.type}</Text>
            <Button
            title='Go to Map'
            onPress={this.handleClick.bind(this)}
            />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});