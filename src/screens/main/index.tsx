import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import CommunityScreen from './CommunityScreen';
import InformationScreen from './InformationScreen'

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen 
        name="Community" 
        component={CommunityScreen} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="comments" size={30} color="black" />
          ),
          }}
      />
      <BottomTab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="home" size={30} color="black" />
          ),
          }}
      />
      <BottomTab.Screen 
        name="Information" 
        component={InformationScreen} 
        options={{headerShown: false,
          tabBarIcon: () => (
          <Icon name="info" size={30} color="black" />
          ),
          }}
      />
    </BottomTab.Navigator>
  );
}

export default MainScreen;