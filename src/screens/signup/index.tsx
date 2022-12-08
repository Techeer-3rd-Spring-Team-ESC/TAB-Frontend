import React from 'react';
 import {View, StyleSheet, Platform, Text} from 'react-native';

 import IDInputbox from '../../components/signup/IDInputbox';
 import DomainInputbox from '../../components/signup/DomainInputbox';
 import EmailCheckButton from '../../components/signup/EmailCheckButton';
 import IDInputboxCheck from '../../components/signup/IDInputboxCheck';
 import PWInputbox from '../../components/signup/PWInputbox';
 import PWInputboxCheck from '../../components/signup/PWInputboxCheck';
 import NameInputbox from '../../components/signup/NameInputbox';
 import SignUpButton from '../../components/signup/SignUpButton';



 function SignUpScreen() {

  const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: 'white'
    },

    signupText: {
      marginTop: Platform.OS == 'ios' ? 200 : 100,
      marginBottom: 30,
      textAlign: "center",
      color: "black",
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
    },

    idContainer: {
      flexDirection: 'row'
    },

    inputIDBox: {
      height: 50,
      marginTop: 20,
      marginLeft: 20,
      fontSize: 10,
      fontFamily: 'GmarketSansTTFLight',
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    domainBox: {
      height: 50,
      width: Platform.OS == 'ios' ? 150 : 128,
      marginTop: 20,
      marginLeft: 10,
      fontSize: 10,
      fontFamily: 'GmarketSansTTFLight',
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    emailCheckbox: {
      marginTop: 16,
      padding: 4,
      paddingHorizontal: 10
    },

    inputBox: {
      height: 50,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 10,
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    signupBox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 30,
      fontFamily: 'GmarketSansTTFLight'
    }
  });


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