import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Button, TextInput } from 'react-native';
import Database from '../api/database';

class LogInForm extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  login() {
    Database.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22, justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View>
            
            <Text style={{fontSize: 25, textAlign: 'center'}}>Please Enter Your Email and Password</Text>

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
            
           
           
            <Button
            title="Log in"
            onPress={() => {this.login()}}/>
            <Button
            title="Cancel"
            onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>



          </View>
         </View>
        </Modal>

        <Button
        title="Log In"
        onPress={() => {
          this.setModalVisible(true)
        }}/>

      </View>
    );
  }
}

export default LogInForm;