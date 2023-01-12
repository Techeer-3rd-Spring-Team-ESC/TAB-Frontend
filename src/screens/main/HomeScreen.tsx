import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';
import homeStyles from '../../styles/screens/Home';
import titleStyles from '../../styles/home/TitleText';
import LogoButton from '../../components/community/LogoButton';

type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <SafeAreaView style = {homeStyles.container}>
      <View style = {homeStyles.searchcontainer}>
          <LogoButton/>
      </View>

      <Text style = {titleStyles.titletext}>
        어서 오세요, 홍길동님!
      </Text> 



    </SafeAreaView>
  );
}

export default HomeScreen;