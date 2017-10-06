import React, { Component }  from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.handlePress(this.props.title, this.props.description)}}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={this.props.imageSource}/>
                </View>
                <View style={styles.textCont}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>     
                   
                    </View>
            </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'powderblue', 
        borderColor: '#CDCDCD', 
        borderWidth: 0.5,
        alignItems: 'center',
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

export default MenuItem;