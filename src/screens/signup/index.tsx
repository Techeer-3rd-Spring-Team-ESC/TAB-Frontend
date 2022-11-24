import React from 'react';
 import {View, Text, StyleSheet} from 'react-native';
 import SignUpButton from '../../components/signup/SignUpButton';
 import InputboxID from '../../components/signup/InputboxID';
 import InputboxIDcheck from '../../components/signup/InputboxIDcheck';
 import InputboxPW from '../../components/signup/InputboxPW';
 import InputboxPWcheck from '../../components/signup/InputboxPWcheck';
 import InputboxName from '../../components/signup/InputboxName';


 function SignUpScreen() {

   const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: 'white'
    },

    signuptext: {
      marginTop: 80,
      marginBottom: 30,
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
      padding: 6,
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
      <View style={styles.inputbox}>
      <InputboxID/>
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