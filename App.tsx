/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import EmailLoginScreen from './src/screens/emailLogin';
import SignUpScreen from './src/screens/signup';
import PostScreen from './src/screens/main/PostScreen';
import ArticleScreen from './src/screens/main/ArticleScreen';
import MainScreen from './src/screens/main';
import BookmarkScreen from './src/screens/bookmark/BookmarkScreen';
import {RootStackParamList} from './src/screens/RootStackParams';

  const Stack = createStackNavigator<RootStackParamList>();


import React, {type PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="EmailLogin" component={EmailLoginScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Post" component={PostScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Article" component={ArticleScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Bookmark" component={BookmarkScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
