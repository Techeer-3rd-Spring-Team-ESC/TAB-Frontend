import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Image, ScrollView} from 'react-native';
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
import styles from '../../styles/screens/Community';

type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>;

function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <SafeAreaView style = {styles.container}>
        <View style = {styles.searchcontainer}>
            <View>                
                <Image 
                style = {styles.image}
                source = {require('../../../assets/images/tab.png')}
                />
            </View>
            <View style = {styles.search}>
                <SearchBox/>
                <SearchButton/>
            </View>
        </View>
        <ScrollView>
          <InformationTag/>
          <PostList/>
          <View style = {styles.postcontainer}> 
              <Profile/>
              <BookmarkButton/>
              <LikeButton/>
              <CommentButton/>
          </View>
          <View style = {styles.verticleLine}/>

          <QuestionTag/>
          <PostList/>
          <View style = {styles.postcontainer}> 
              <Profile/>
              <BookmarkButton/>
              <LikeButton/>
              <CommentButton/>
          </View>
          <View style = {styles.verticleLine}/> 
          
          <InformationTag/>
          <PostList/>
          <View style = {styles.postcontainer}> 
              <Profile/>
              <BookmarkButton/>
              <LikeButton/>
              <CommentButton/>
          </View>
          <View style = {styles.verticleLine}/>

          <QuestionTag/>
          <PostList/>
          <View style = {styles.postcontainer}> 
              <Profile/>
              <BookmarkButton/>
              <LikeButton/>
              <CommentButton/>
          </View>
          <View style = {styles.verticleLine}/> 

          <View style = {styles.post}>
              <PostButton/>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;