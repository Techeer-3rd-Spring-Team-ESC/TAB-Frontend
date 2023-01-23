import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
      <LogoButton/>
      <Text style = {titleStyles.titletext}>
        어서 오세요, 홍길동님!
      </Text>
      <View style = {mainMenuStyles.menuContainer}>
      
        <View style = {mainMenuStyles.communityMenu}>
          <TouchableOpacity
            onPress = {() => navigation.navigate('Bookmark')}
          >
            <Text style= {mainMenuStyles.communityText}>
              게시글을 {'\n'}
              모아보세요!
            </Text>
            <CommunityIcon/>
            <View style = {mainMenuStyles.buttonStyle}>
              <Text style = {mainMenuStyles.buttonText}>
                  게시글모음
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {mainMenuStyles.bookmarkMenu}>
          <TouchableOpacity
            onPress = {() => navigation.navigate('Bookmark')}
          >
            <Text style= {mainMenuStyles.communityText}>
              북마크를 {'\n'}
              모아보세요!
            </Text>
            <BookmarkIcon/>
            <View style = {mainMenuStyles.buttonStyle}>
              <Text style = {mainMenuStyles.buttonText}>
                  북마크모음
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> 
      <View style = {mainMenuStyles.informationMenu}>
        <TouchableOpacity
          onPress = {() => navigation.navigate('Information')}
        > 
          <Text style= {mainMenuStyles.communityText}>
            정보를 모아보세요!
          </Text>
          <View style = {mainMenuStyles.informationContainer}>
            <InformationIcon/>
              <View style = {mainMenuStyles.infoButtonStyle}>
              <Text style = {mainMenuStyles.buttonText}>
                정보글모음
              </Text>
              </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

// ios 화면 조정
// ios 내리고 (안드 조정) 위에 뒤로가기 버튼 추가
// 메뉴 색 통일 + 아이콘으로 각인
// 