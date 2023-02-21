import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import IDInputbox from '../../components/signup/IDInputbox';
import DomainInputbox from '../../components/signup/DomainInputbox';
import EmailCheckButton from '../../components/signup/EmailCheckButton';
import IDInputboxCheck from '../../components/signup/IDInputboxCheck';
import PWInputbox from '../../components/signup/PWInputbox';
import PWInputboxCheck from '../../components/signup/PWInputboxCheck';
import NameInputbox from '../../components/signup/NameInputbox';
import signStyles from '../../styles/screens/Signup';
import styles from '../../styles/signup/SignUpButton';
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

function SignUpScreen() {
  const navigation = useNavigation<SignUpScreenProp>();

  
  const [email, setEmail] = useState('');
  const [idCheck, setIdCheck] = useState('');
  const [password, setPassword] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [name, setName] = useState('');

  async function signupAPI() {
    try {
      const response = await axios.post(
      'http://10.0.2.2:8080/api/v1/member/signup',
        {
          email: email,
          password: password,
          name: name
        },
      )
        .then(function (response) {
            // console.log(response)
            navigation.navigate('EmailLogin')
        })
        .catch(function (error) {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <View style = {signStyles.container}>
      <Image style = {signStyles.image}
        source = {require('../../../assets/images/tab.png')}
      />
      <View style = {signStyles.idContainer}>
        <View style = {signStyles.inputIDBox}>
          <TextInput
              style = {signStyles.inputStyle}
              placeholder = "이메일"
              onChangeText={(email) => {setEmail(email)}}
          />
        </View>
        <View style = {signStyles.emailCheckbox}>
          <EmailCheckButton/>
        </View>
      </View>
      <View style = {signStyles.inputBox}>
        <TextInput
          style = {signStyles.inputStyle}
          placeholder = '인증번호'
          onChangeText={(password) => {setPassword(password)}}
        />
      </View>
      <View style = {signStyles.inputBox}>
        <TextInput
          style = {signStyles.inputStyle}
          placeholder = '비밀번호'
          onChangeText={(password) => {setPassword(password)}}
        />
      </View>
      <View style = {signStyles.inputBox}>
        <PWInputboxCheck
          setPwCheck={setPwCheck}
        />
      </View>
      <View style = {signStyles.inputBox}>
        <NameInputbox
          setName={setName}
        />
      </View>
      <View style = {signStyles.signupBox}>
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress={() => {
              signupAPI()
            }}
        >
            <Text style = {styles.buttonTitle}>
                회원가입
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpScreen;