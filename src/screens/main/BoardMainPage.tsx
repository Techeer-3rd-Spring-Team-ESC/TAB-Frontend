import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';
import InputboxSearch from './InputboxSearch';
import SafeAreaView from 'react-native-safe-area-view';

type BoardMainPageProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Main'>,
  BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>;

class BoardMainPage extends Component {
  navigation = useNavigation<BoardMainPageProp>();

  styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: '#F8F9FA',
    },

    logoimage: {
      width: 114,
      height: 63,
      marginLeft: 10,
    },

    maintext: {
      marginTop: 60,
      marginBottom: 10,
      marginLeft: 20,
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
      textAlign: 'left',
      color: 'black',
    },

    subtext: {
      marginTop: 70,
      marginBottom: 10,
      marginLeft: 150,
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 20,
      textAlign: 'right',
      color: 'black',
    },

    inputbox: {
      flexDirection: 'row',
      marginLeft: 10,
      marginTop: 20,
      marginRight: 10,
      fontSize: 5,
      paddingHorizontal: 10,
      borderRadius: 6,
      backgroundColor: '#D9D9D9',
      borderColor: 'gray',
    },

    tablebox: {
      backgroundColor: '#FFFFFF',
      marginLeft: 20,
      marginTop: 10,
      width: 390,
      height: 150,
      borderRadius: 8,
    },

    tabletext1: {
      marginTop: 15,
      marginLeft: 20,
      marginRight: 10,
      fontSize: 15,
      fontFamily: 'GmarketSansTTFBold',
    },

    tabletext2: {
      marginTop: 10,
      marginLeft: 6,
      marginRight: 90,
      fontSize: 15,
    },

    tableimage: {
      width: 60,
      height: 60,
      marginLeft: 20,
      marginTop: 10,
    },

    tagbox: {
      backgroundColor: '#cdf7cc',
      marginLeft: 20,
      marginTop: 10,
      width: 120,
      height: 30,
      borderRadius: 100,
    },
  });
  render() {
    return (
      <SafeAreaView>
        <View style={this.styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image
              style={this.styles.logoimage}
              source={require('../../../assets/images/tab_logo.png')}
            />
            <View style={this.styles.inputbox}>
              <InputboxSearch />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={this.styles.maintext}>인기 게시물</Text>
            <Text style={this.styles.subtext}>더보기 {'>'}</Text>
          </View>
          <View style={this.styles.tablebox}>
            <Text style={this.styles.tabletext1}>
              Top 7 mistakes that React developers
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Image
                style={this.styles.tableimage}
                source={require('../../../assets/images/redreact.png')}
              />
              <Text style={this.styles.tabletext2}>
                At the beginning of a carrer, each new bie has to overcome
                troubles and obstacles. React developers are no exception here
                ...
              </Text>
            </View>
            <View style={this.styles.tagbox}>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 7,
                  fontFamily: 'GmarketSansTTFBold',
                  fontSize: 12,
                }}>
                #AI Fellowship
              </Text>
            </View>
          </View>
          <View style={this.styles.tablebox}>
            <Text style={this.styles.tabletext1}>
              4 tips to code better in React
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Image
                style={this.styles.tableimage}
                source={require('../../../assets/images/bluereact.png')}
              />
              <Text style={this.styles.tabletext2}>
                At the beginning of a career, each newbie has to overcome
                troubles and obstacles. React developers are no exception here
                ...
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <View style={this.styles.tagbox}>
                <Text
                  style={{
                    marginLeft: 33,
                    marginTop: 7,
                    fontFamily: 'GmarketSansTTFBold',
                    fontSize: 12,
                  }}>
                  #React
                </Text>
              </View>
              <View style={this.styles.tagbox}>
                <Text
                  style={{
                    marginLeft: 43,
                    marginTop: 7,
                    fontFamily: 'GmarketSansTTFBold',
                    fontSize: 12,
                  }}>
                  #JS
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default BoardMainPage;
