import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Button, TextInput } from 'react-native';

class LogInForm extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
         <View style={{marginTop: 22}}>
          <View>
            
            <Text>Hello World!</Text>

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
            title="Hide Modal"
            onPress={() => {this.setModalVisible(!this.state.modalVisible)}}/>



          </View>
         </View>
        </Modal>

        <Button
        title="Log in Modal"
        onPress={() => {
          this.setModalVisible(true)
        }}/>

      </View>
    );
  }
}

export default LogInForm;