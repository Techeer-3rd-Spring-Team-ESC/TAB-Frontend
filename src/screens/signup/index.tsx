import React, {useState, Component} from 'react';
 import {View, Text, StyleSheet} from 'react-native';
 import { Dropdown } from 'react-native-material-dropdown';
 import SignUpButton from '../../components/signup/SignUpButton';
 import InputboxID from '../../components/signup/InputboxID';
 import InputboxDomain from '../../components/signup/InputboxDomain';
 import InputboxIDcheck from '../../components/signup/InputboxIDcheck';
 import InputboxPW from '../../components/signup/InputboxPW';
 import InputboxPWcheck from '../../components/signup/InputboxPWcheck';
 import InputboxName from '../../components/signup/InputboxName';



 function SignUpScreen() {

  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
  ];

  const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: 'white',
  },

  signuptext: {
    marginTop: 70,
    marginBottom: 30,
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 30,
    textAlign: "center",
    color: "black"
  },

  normaltext: {
    fontFamily: 'GmarketSansTTFLight',
  },

  idcontainer: {
    flexDirection: 'row'
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

  scollbox: {
    width: 140,
    maxHeight: 300,
    marginTop: 5,
    padding: 4,
    paddingHorizontal: 10,
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
      <View style={{marginLeft: 10, marginTop: 15, justifyContent: 'center'}}>
        <Text> @ </Text>
      </View>
      <View style={styles.domainbox}>
        <InputboxDomain/>
      </View>
      <View style={styles.scollbox}>
      
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