import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import {MainBottomTabParamList} from './MainBottomTabParams';
import CommunityScreen from './CommunityScreen';
import InformationScreen from './InformationScreen'

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Community" component={CommunityScreen} options={{headerShown: false,}}/>
      <BottomTab.Screen name="Home" component={HomeScreen} options={{headerShown: false,}}/>
      <BottomTab.Screen name="Information" component={InformationScreen} options={{headerShown: false,}}/>
    </BottomTab.Navigator>
  );
}

export default MainScreen;