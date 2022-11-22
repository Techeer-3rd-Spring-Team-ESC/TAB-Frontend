import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function LoginScreen() {
  const navigation = useNavigation<loginScreenProp>();

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
      fontSize: 60,
      alignItems : "center"
    },

    idbox: {
      marginTop: 40,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 30,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    pwbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 30,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    loginbox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 30,
    },

    missing:{
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      alignItems : "center",
      fontSize: 30,
      color: 'green',
      border: "none"
    }

  });

  return (
    <View>
      <View style={styles.image}></View>
      <View style={styles.logintext}>
        <Text>로그인</Text>
      </View>
      <View style={styles.idbox}>
        <TextInput>아이디</TextInput>
      </View>
      <View style={styles.pwbox}>
        <TextInput>비밀번호</TextInput>
      </View>
      <View style={styles.loginbox}>
        <Button 
          title="로그인하기" 
          color='#2BC63B'
          onPress={() => navigation.navigate('Main')} />
      </View>
      <View style={styles.missing}>
        <Button 
            title="계정을 잊으셨나요?"
            onPress={() => navigation.navigate('Main')} />
      </View>
    </View>
  );
}

export default LoginScreen;