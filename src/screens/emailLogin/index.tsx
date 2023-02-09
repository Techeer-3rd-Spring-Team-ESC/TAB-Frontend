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

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function EmailLoginScreen() {
  const navigation = useNavigation<loginScreenProp>();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

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