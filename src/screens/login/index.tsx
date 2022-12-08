import React from 'react';
import {View, StyleSheet, Platform, Text, Image} from 'react-native';
import EmailLoginButton from '../../components/login/EmailLoginButton';
import KakaoLoginButton from '../../components/login/KakaoLoginButton';
import GoogleLoginButton from '../../components/login/GoogleLoginButton';
import GithubLoginButton from '../../components/login/GithubLoginButton';
import ForgotButton from '../../components/login/ForgotButton';


function LoginScreen() {

  const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: 'white'
    },

    image: {
      width: 500,
      height: 200,
      marginTop: Platform.OS == 'ios' ? 200 : 60,
      marginLeft: 10
    },

    logintext: {
      marginBottom: 20,
      textAlign: 'center',
      color: 'black',
      fontSize: 30,
      fontFamily: 'GmarketSansTTFBold'
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
      fontSize: 10
    },

    loginbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      borderColor: 'black'
    },

    missing:{
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      alignItems : 'center',
      border: 'none',
      fontSize: 30,
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
      <KakaoLoginButton/>
      <GoogleLoginButton/>
      <GithubLoginButton/>
      <EmailLoginButton/>
      <ForgotButton/>
    </View>
  );
}

export default LoginScreen;