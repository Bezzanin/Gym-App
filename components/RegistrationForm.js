import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Button, TextInput } from 'react-native';
import Database from '../api/database';
import * as firebase from 'firebase';

class RegistrationForm extends Component {

    componentDidMount() {
        Database.getExercises( (exercises) => {
          this.setState({
            exercises: exercises
          })
        });
        
        /* We have to set interval here, because Firebase currentUser property is not initialized yet */
        let timeout = setInterval(() => {
          if (firebase.auth().currentUser !== null) {
            clearInterval(timeout);
            let uid = firebase.auth().currentUser.uid;
            this.setState({uid})
          }
    
        }, 500)
      }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  async register() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            await Database.addUserData(this.state.name, this.state.weight, this.state.height); 
            console.log("account Created")
            } catch (error) {
            console.log(error)
        }
}

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
         <View style={{marginTop: 22, justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View>
            
            <Text style={{fontSize: 25, textAlign: 'center'}}>Enter your Details</Text>

            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            placeholder={'Email'}
          />
          <TextInput
            secureTextEntry
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            placeholder={'Password'}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
            placeholder={'Name'}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(weight) => this.setState({weight})}
            value={this.state.weight}
            placeholder={'Weight'}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(height) => this.setState({height})}
            value={this.state.height}
            placeholder={'Height'}
          />
          
          <Button
            title="Register"
            onPress={() => {this.register()}}/>
            <Button
            title="Cancel"
            onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>



          </View>
         </View>
        </Modal>

        <Button
        title="Register"
        onPress={() => {
          this.setModalVisible(true)
        }}/>

      </View>
    );
  }
}

export default RegistrationForm;