import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Layout from '../constants/Layout';


class Item extends Component {
    static navigationOptions = {
        header: null,
      };
      componentDidMount() {
          console.log("LOGOSGOS")
          console.log(this.props.item)
      }

    render() {
        return(
            <TouchableOpacity onPress={this.onPress}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{uri : this.props.src}}/>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.header}>{this.props.name}</Text>
                    <Text style={styles.description}>Some description text. Preferably in another style.</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    onPress = () => {
        console.log('Card item pressed ' + this.props.exoId)
        this.props.navigation.navigate('Exercises')
    }
}

const styles = StyleSheet.create({

})

export default Item;