import React from 'react';
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import Database from '../api/database';
import ProgramCard from '../components/ProgramCard'

export default class ProgramsScreen extends React.Component {
  static navigationOptions = {
    title: 'Programs',
  };

  constructor(props){
    super(props);
    this.state = {
      programs: []
    }
  }

  componentDidMount() {
    Database.getPrograms( (programs) => {
      console.log(programs)
      this.setState({
        programs: programs
      })
    });
  }
  handlePress(name, description) {
    // this.props.navigation.navigate('SingleExercise', {name: name, description: description})
    console.log("pressed")
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>These are programs</Text>
        <FlatList
          data={Object.values(this.state.programs)}
          renderItem={({item}) => 
          <ProgramCard
            title={item.name}
            exercises={item.exercises}
            handlePress={this.handlePress.bind(this)}/>}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
