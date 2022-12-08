import React from 'react';
 import {View, StyleSheet, Platform, Text} from 'react-native';

 import InputboxID from '../../components/signup/InputboxID';
 import InputboxDomain from '../../components/signup/InputboxDomain';
 import EmailCheckButton from '../../components/signup/EmailCheckButton';
 import InputboxIDcheck from '../../components/signup/InputboxIDcheck';
 import InputboxPW from '../../components/signup/InputboxPW';
 import InputboxPWcheck from '../../components/signup/InputboxPWcheck';
 import InputboxName from '../../components/signup/InputboxName';
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
          <InputboxID/>
        </View>
        <View style = {{
          marginTop: 15, 
          marginLeft: 10, 
          justifyContent: 'center'}}>
          <Text> @ </Text>
        </View>
        <View style = {styles.domainBox}>
          <InputboxDomain/>
        </View>
        <View style = {styles.emailCheckbox}>
          <EmailCheckButton/>
        </View>
      </View>
      <View style = {styles.inputBox}>
        <InputboxIDcheck/>
      </View>
      <View style = {styles.inputBox}>
        <InputboxPW/>
      </View>
      <View style = {styles.inputBox}>
        <InputboxPWcheck/>
      </View>
      <View style = {styles.inputBox}>
        <InputboxName/>
      </View>
      <View style = {styles.signupBox}>
        <SignUpButton/>
      </View>
    </View>
  );
 }

 export default SignUpScreen;