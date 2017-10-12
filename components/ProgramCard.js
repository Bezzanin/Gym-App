import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import Database from '../api/database';
import ImageExercise from '../components/ImageExercise';

class ProgramCard extends Component {

    constructor(props){
        super(props);
        this.state = {
          exercises: []
        }
      }

componentDidMount() {
    Database.filterExercises(this.props.exercises, (filterExercises) => {
        this.setState({ exercises: filterExercises})
    })
}

    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.handlePress(this.props.title, this.props.description)}}>
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={{flexDirection: 'column'}}>
                <FlatList
                    data={this.state.exercises}
                    renderItem={({item}) =>
                    <ImageExercise
                        title={item.name}
                        id={item.name}
                        description={item.description}
                        imageSource={item.url}/>}
          /> 
            </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        borderColor: '#CDCDCD', 
        borderWidth: 0.5,
        paddingHorizontal: 16,
        marginHorizontal: 8,
        marginVertical: 4,
    },
    textCont: {
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        padding: 8,
    },
    image: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
    },
    description: {
        fontSize: 16,
        width: 100,
    }

})

export default ProgramCard;