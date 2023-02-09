import React from "react";
import {View, Text, Image} from 'react-native';
import EmailLoginButton from '../../components/login/EmailLoginButton';
import KakaoLoginButton from '../../components/login/KakaoLoginButton';
import GoogleLoginButton from '../../components/login/GoogleLoginButton';
import GithubLoginButton from '../../components/login/GithubLoginButton';
import ForgotButton from '../../components/login/ForgotButton';
import styles from '../../styles/screens/Login';
import titleStyles from '../../styles/home/TitleText';

function LoginScreen() {
  return (
    <View style = {styles.container}>
      <Image
        style = {styles.image}
        source = {require('../../../assets/images/tab.png')}
      />
      {/* <Text style = {titleStyles.logintext}>
        로그인
      </Text> */}
      <KakaoLoginButton/>
      <EmailLoginButton/>
      <ForgotButton/>
    </View>
  );
};

export default LoginScreen;