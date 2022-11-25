import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
      marginTop: 80,
      marginBottom: 30,
      backgroundColor: 'powderblue'
    },

    logintext: {
      marginBottom: 20,
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
      textAlign: "center",
      color: "black"
    },

    inputbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    loginbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      borderColor: "black"
    },

    missing:{
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      alignItems : "center",
      fontSize: 30,
      border: "none"
    }

  });

  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
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