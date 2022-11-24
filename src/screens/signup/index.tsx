import React from 'react';
 import {View, Text, StyleSheet} from 'react-native';
 import SignUpButton from '../../components/signup/SignUpButton';

 function SignUpScreen() {

   const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: 'white'
    },

    image: {
      width: 500,
      height: 200,
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: 'powderblue'
    },

    logintext: {
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
      textAlign: "center",
      color: "black"
    },

    idbox: {
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    pwbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    loginbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontFamily: 'GmarketSansTTFLight',
      fontSize: 30,
    },

    missing:{
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      alignItems : "center",
      fontSize: 30,
      border: "none"
    }

  });

   return (
     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>회원가입 화면</Text>
       <SignUpButton/>
     </View>
   );
 }

 export default SignUpScreen;