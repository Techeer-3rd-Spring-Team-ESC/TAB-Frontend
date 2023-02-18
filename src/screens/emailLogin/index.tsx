import React,{useState} from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import ForgotButton from '../../components/emailLogin/ForgotButton';
import IDInputbox from '../../components/emailLogin/IDInputbox';
import PWInputbox from '../../components/emailLogin/PWInputbox';
import styles from '../../styles/screens/EmailLogin';
import titleStyles from '../../styles/home/TitleText';
import emailStyles from '../../styles/emailLogin/LoginButton';
import KakaoLoginButton from "../../components/login/KakaoLoginButton";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function EmailLoginScreen() {
  const navigation = useNavigation<loginScreenProp>();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  async function loginAPI() {
    try {
      const response = await axios.patch(
      'http://10.0.2.2:8000/api/v1/member/login',
        {
          email: id,
          password: password
        },
      )
        .then(function (response) {
            var str1 = 'Bearer '
            var res = str1.concat(response.data.access)
            AsyncStorage.setItem('accessToken', res);
            navigation.navigate('Main')
            console.log('[access] ' + res)
        })
        .catch(function (error) {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <View style = {styles.container}>
      <Image style = {styles.image}
        source = {require('../../../assets/images/tab.png')}
      />
      <View style = {styles.inputbox}>
        <IDInputbox
          setId={setId}
        />
      </View>
      <View style = {styles.inputbox}>
        <PWInputbox
          setPassword={setPassword}
        />
      </View>
      <TouchableOpacity
        style = {emailStyles.buttonStyle}
        onPress = {() => {
          // loginAPI()
          navigation.navigate('Main')
        }}
      >
        <Text style = {emailStyles.buttonTitle}>
            로그인
        </Text>
      </TouchableOpacity>
      <ForgotButton/>
    </View>
  );
}

export default EmailLoginScreen;