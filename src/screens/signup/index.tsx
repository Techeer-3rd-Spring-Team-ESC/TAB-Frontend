import React from "react";
import {View, Text} from 'react-native';
import IDInputbox from '../../components/signup/IDInputbox';
import DomainInputbox from '../../components/signup/DomainInputbox';
import EmailCheckButton from '../../components/signup/EmailCheckButton';
import IDInputboxCheck from '../../components/signup/IDInputboxCheck';
import PWInputbox from '../../components/signup/PWInputbox';
import PWInputboxCheck from '../../components/signup/PWInputboxCheck';
import NameInputbox from '../../components/signup/NameInputbox';
import SignUpButton from '../../components/signup/SignUpButton';
import styles from '../../styles/screens/Signup';

function SignUpScreen() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.signupText}>
        회원가입
      </Text>
      <View style = {styles.idContainer}>
        <View style = {styles.inputIDBox}>
          <IDInputbox/>
        </View>
        <View style = {{
          marginTop: 15, 
          marginLeft: 10, 
          justifyContent: 'center'}}>
          <Text> @ </Text>
        </View>
        <View style = {styles.domainBox}>
          <DomainInputbox/>
        </View>
        <View style = {styles.emailCheckbox}>
          <EmailCheckButton/>
        </View>
      </View>
      <View style = {styles.inputBox}>
        <IDInputboxCheck/>
      </View>
      <View style = {styles.inputBox}>
        <PWInputbox/>
      </View>
      <View style = {styles.inputBox}>
        <PWInputboxCheck/>
      </View>
      <View style = {styles.inputBox}>
        <NameInputbox/>
      </View>
      <View style = {styles.signupBox}>
        <SignUpButton/>
      </View>
    </View>
  );
}

export default SignUpScreen;