import React from 'react';
import {View, StyleSheet, Platform, Text, Image} from 'react-native';
import LoginButton from '../../components/emailLogin/LoginButton';
import ForgotButton from '../../components/emailLogin/ForgotButton';
import InputboxID from '../../components/emailLogin/InputboxID';
import InputboxPW from '../../components/emailLogin/InputboxPW';

function EmailLoginScreen() {

  const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: 'white'
    },

    image: {
      width: 500,
      height: 200,
      marginTop: Platform.OS == 'ios' ? 240 : 80,
      marginLeft: 10,
    },

    logintext: {
      marginBottom: 20,
      textAlign: 'center',
      color: 'black',
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
    },

    inputbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 10,
    },

    loginbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 30,
      fontFamily: 'GmarketSansTTFLight',
    },

    missing:{
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      alignItems : 'center',
      fontSize: 30,
      border: 'none'
    }

  });

  return (
    <View style = {styles.container}>
      <View style = {styles.image}>
        <Image
          source = {require('../../../assets/images/tab.png')}
        />
      </View>
      <Text style = {styles.logintext}>
        로그인
      </Text>
      <View style = {styles.inputbox}>
        <InputboxID/>
      </View>
      <View style = {styles.inputbox}>
        <InputboxPW/>
      </View>
      <LoginButton/>
      <ForgotButton/>
    </View>
  );
}

export default EmailLoginScreen;