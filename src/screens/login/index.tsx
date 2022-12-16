import React, {Component} from "react";
import {View, Text, Image} from 'react-native';
import EmailLoginButton from '../../components/login/EmailLoginButton';
import KakaoLoginButton from '../../components/login/KakaoLoginButton';
import GoogleLoginButton from '../../components/login/GoogleLoginButton';
import GithubLoginButton from '../../components/login/GithubLoginButton';
import ForgotButton from '../../components/login/ForgotButton';
import styles from '../../styles/screens/Login';
import '@lang/i18n';

class LoginScreen extends Component {
  render () {
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
  };
};

export default LoginScreen;