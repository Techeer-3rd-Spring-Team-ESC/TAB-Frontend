import React from 'react';
 import {View, Text, StyleSheet, Platform} from 'react-native';

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
    backgroundColor: 'white',
  },

  signuptext: {
    marginTop: Platform.OS == 'ios' ? 200 : 100,
    marginBottom: 30,
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 30,
    textAlign: "center",
    color: "black"
  },

  idcontainer: {
    flexDirection: 'row',
  },

  inputIDbox: {
    height: 50,
    marginTop: 20,
    marginLeft: 20,
    fontFamily: 'GmarketSansTTFLight',
    fontSize: 10,
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },

  domainbox: {
    height: 50,
    width: Platform.OS == 'ios' ? 150 : 128,
    marginTop: 20,
    marginLeft: 10,
    fontFamily: 'GmarketSansTTFLight',
    fontSize: 10,
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },

  emailcheckbox: {
    marginTop: 16,
    padding: 4,
    paddingHorizontal: 10,
  },

  inputbox: {
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

  signupbox: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'GmarketSansTTFLight',
    fontSize: 30,
  }
  });


  return (
  <View style={styles.container}>
    <Text style = {styles.signuptext}>
      회원가입
    </Text>
    <View style={styles.idcontainer}>
      <View style={styles.inputIDbox}>
        <InputboxID/>
      </View>
      <View style={{
        marginTop: 15, 
        marginLeft: 10, 
        justifyContent: 'center'}}>
        <Text> @ </Text>
      </View>
      <View style={styles.domainbox}>
        <InputboxDomain/>
      </View>
      <View style={styles.emailcheckbox}>
        <EmailCheckButton/>
      </View>
    </View>
    <View style={styles.inputbox}>
      <InputboxIDcheck/>
    </View>
    <View style={styles.inputbox}>
      <InputboxPW/>
    </View>
    <View style={styles.inputbox}>
      <InputboxPWcheck/>
    </View>
    <View style={styles.inputbox}>
      <InputboxName/>
    </View>
    <SignUpButton/>
    </View>
  );
 }

 export default SignUpScreen;