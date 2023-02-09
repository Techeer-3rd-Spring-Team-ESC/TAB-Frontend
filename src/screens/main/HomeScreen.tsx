import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';
import titleStyles from '../../styles/home/TitleText';
import mainMenuStyles from '../../styles/home/MainMenu';
import BookmarkIcon from '../../components/home/BookmarkIcon';
import InformationIcon from '../../components/home/InformationIcon';
import CommunityIcon from '../../components/home/CommunityIcon';

type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <SafeAreaView style = {mainMenuStyles.mainContainer}>
      <Text style = {titleStyles.titletext}>
        어서 오세요, 홍길동님!
      </Text>
      <View style = {mainMenuStyles.menuContainer}>
          <TouchableOpacity
            style = {mainMenuStyles.communityMenu}
            onPress = {() => navigation.navigate('Community')}
          >
            <Text style= {mainMenuStyles.communityText}>
              게시글을 {'\n'}
              모아보세요!
            </Text>
            <CommunityIcon/>
          </TouchableOpacity>
          <TouchableOpacity
            style = {mainMenuStyles.bookmarkMenu}
            onPress = {() => navigation.navigate('Bookmark')}
          >
            <Text style= {mainMenuStyles.communityText}>
              북마크를 {'\n'}
              모아보세요!
            </Text>
            <BookmarkIcon/>
          </TouchableOpacity>
      </View> 
        <TouchableOpacity
          style = {mainMenuStyles.informationMenu}
          onPress = {() => navigation.navigate('Information')}
        > 
          <Text style= {mainMenuStyles.communityText}>
            정보를 모아보세요!
          </Text>
          <View style = {mainMenuStyles.informationContainer}>
            <InformationIcon/>
          </View>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;

// ios 화면 조정
// ios 내리고 (안드 조정) 위에 뒤로가기 버튼 추가
// 메뉴 색 통일 + 아이콘으로 각인
// 