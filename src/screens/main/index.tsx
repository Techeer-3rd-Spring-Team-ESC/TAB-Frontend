import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';

import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen';
import CommunityScreen from './CommunityScreen';
import InformationScreen from './InformationScreen'
import BookmarkScreen from '../bookmark/BookmarkScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen 
        name = 'Home'
        component = {HomeScreen} 
        options = {{
          headerShown: false,
          tabBarIcon: () => (
            <Icon 
              name = 'home'
              size = {30}
              color = 'black'
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MainScreen;