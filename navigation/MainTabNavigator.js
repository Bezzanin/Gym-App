import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import ProgramsScreen from '../screens/ProgramsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ExerciseScreen from '../screens/ExerciseScreen';


export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Programs: {
      screen: ProgramsScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Exercise: {
      screen: ExerciseScreen,
    },

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = `ios-information-circle`
            break;
          case 'Programs':
            iconName = `ios-link${focused ? '' : '-outline'}`
            break;
          case 'Settings':
            iconName = `ios-options${focused ? '' : '-outline'}`
            break;
          case 'Exercise':
            iconName = `ios-stats${focused ? '' : '-outline'}`
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);