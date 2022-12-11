import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/main/HomeScreen';
// import CommunityScreen from '../screens/main/CommunityScreen';
import InformationScreen from '../screens/main/InformationScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MainScreen from '../screens/main';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#4f4f4f',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            top: -5,
          }}>
          <Text style={{color: '#fff'}}>Home</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      drawerContent={DrawerHeaderContent}>
      <Drawer.Screen
        name={'MainScreen'}
        component={MainScreen}
        options={{
          drawerLabel: 'Home Screen',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          drawerLabel: 'Home Screen',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons name="firewire" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'InformationScreen'}
        component={InformationScreen}
        options={{
          drawerLabel: 'Locations Screen',
          drawerIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="location-enter"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});

export default DrawerNavigator;
