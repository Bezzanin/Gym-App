import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layout from '../constants/Layout';


export default class ExerciseScreen extends React.Component {
    static navigationOptions = {
        title: "Profile",
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/icons/notification-icon.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

  render() {
    return (
      <ScrollView>
            <Text>PRO SCREEN</Text>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });