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
import CommunityButton from '../../components/home/CommunityNavigater';
import InformationNavigater from '../../components/home/InformationNavigater';
import CommunityNavigater from '../../components/home/CommunityNavigater';
import BookmarkNavigater from '../../components/home/BookmarkNavigater';
import mainMenuStyles from '../../styles/home/MainMenu';

type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <SafeAreaView style = {mainMenuStyles.mainContainer}>
      <LogoButton/>
      <Text style = {titleStyles.titletext}>
        어서 오세요, 홍길동님!
      </Text>
      <View style = {mainMenuStyles.menuContainer}>
        <View style = {mainMenuStyles.communityMenu}>
          <Text style= {mainMenuStyles.communityText}>
            게시글을 {'\n'}
            모아보세요!
          </Text>
          <CommunityNavigater/>
        </View>
        <View style = {mainMenuStyles.bookmarkMenu}>
          <Text style= {mainMenuStyles.communityText}>
            북마크를 {'\n'}
            모아보세요!
          </Text>
          <BookmarkNavigater/>
        </View>
      </View> 
      <View style = {mainMenuStyles.informationMenu}>
          <Text style= {mainMenuStyles.communityText}>
            정보를 모아보세요!
          </Text>
          <InformationNavigater/>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;