import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CommunityScreen from '../../screens/main/CommunityScreen';
import HomeScreen from '../../screens/main/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Community' component={CommunityScreen}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;