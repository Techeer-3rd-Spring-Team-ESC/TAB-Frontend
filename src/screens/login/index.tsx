import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import LoginButton from '../../components/LoginButton';
import ForgotButton from '../../components/ForgotButton';

function LoginScreen() {

  const styles = StyleSheet.create({
    center: {

    },

    image: {
      width: 500,
      height : 200,
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: 'powderblue'
    },

    logintext: {
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
      textAlign : "center",
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
    <View>
      <View style={styles.image}></View>
      <Text style = {styles.logintext}>
        로그인
      </Text>
      <TextInput style={styles.idbox}>
        아이디
      </TextInput>
      <TextInput style={styles.pwbox}>
        비밀번호
      </TextInput>
      <LoginButton/>
      <ForgotButton/>
    </View>
  );
}

export default LoginScreen;