import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/main/HomeScreen';
import CommunityScreen from '../../screens/main/CommunityScreen';

function SideDrawer({navigation}: any) {
  
  const Drawer = createDrawerNavigator();
    return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('DrawerOpen')}
        >
            <FontAwesome 
                name = 'bars' 
                size = {Platform.OS == 'ios' ? 60 : 45} 
                color = '#2BC63B' 
            />
        </TouchableOpacity>
    );
};

export default SideDrawer;