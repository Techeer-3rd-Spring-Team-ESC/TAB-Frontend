import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';
import PostButton from '../../components/home/PostButton';
import SearchBox from '../../components/community/SearchBox';
import InformationTag from '../../components/community/InformationTag';
import QuestionTag from '../../components/community/QuestionTag';
import PostList from '../../components/community/PostList';
import Profile from '../../components/community/Profile';
import BookmarkButton from '../../components/community/BookmarkButton';
import LikeButton from '../../components/community/LikeButton';
import CommentButton from '../../components/community/CommentButton';
import SearchButton from '../../components/community/SearchButton';
import homeStyles from '../../styles/screens/Home';
import titleStyles from '../../styles/home/TitleText';
import LeftPageButton from '../../components/home/LeftPageButton';
import RightPageButton from '../../components/home/RightPageButton';
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
          <View style = {homeStyles.search}>
              <SearchBox/>
              <SearchButton/>
          </View>
      </View>

      <Text style = {titleStyles.titletext}>
        인기 게시물
      </Text> 

      <InformationTag/>
      <PostList/>
      <View style = {homeStyles.postcontainer}> 
          <Profile/>
          <BookmarkButton/>
          <LikeButton/>
          <CommentButton/>
      </View>
      <View style = {homeStyles.verticleLine}/>

      <QuestionTag/>
      <PostList/>
      <View style = {homeStyles.postcontainer}> 
          <Profile/>
          <BookmarkButton/>
          <LikeButton/>
          <CommentButton/>
      </View>
      <View style = {homeStyles.verticleLine}/> 
      
      <InformationTag/>
      <PostList/>
      <View style = {homeStyles.postcontainer}> 
          <Profile/>
          <BookmarkButton/>
          <LikeButton/>
          <CommentButton/>
      </View>
      <View style = {homeStyles.verticleLine}/>

      <QuestionTag/>
      <PostList/>
      <View style = {homeStyles.postcontainer}> 
          <Profile/>
          <BookmarkButton/>
          <LikeButton/>
          <CommentButton/>
      </View>
      <View style = {homeStyles.verticleLine}/> 

      <View style = {homeStyles.page}>
          <LeftPageButton/>
            <Text style = {titleStyles.pagetext}>
              1
            </Text>
          <RightPageButton/>
          <PostButton/>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;