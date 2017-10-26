import React from 'react';
import { View, Image} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Layout from '../constants/Layout'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
   
    return(
      <View>
        <Image
        source={require('../assets/images/BCmap.jpg')}
        style={{width: Layout.window.width, alignSelf: 'center'}}
        />
        <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          position: "absolute",
          top: 110
          }}
        />
        <View
        style={{
          width: 70,
          height: 70,
          backgroundColor: 'red',
          position: "absolute",
          left: 170,
          top: 30
          }}
        />
      </View>
    );
  }
}
