import React from 'react';
import {Platform, Text, StyleSheet, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

const AnonymousCheck = () => {
  const [checked, setChecked] = React.useState('first');
  const styles = StyleSheet.create({

    checkboxContainer: {
      marginLeft: 20, 
      marginRight: 300,
      marginBottom: Platform.OS == 'ios' ? 20 : 10,
      padding: 10,
      borderRadius: 8,
      flexDirection: 'row',
    },

    radio: {
      marginLeft: 10,
      alignSelf: 'center',
      backgroundColor: Platform.OS == 'ios' ? '#CECECE': 'white',
      borderRadius: 20,
      borderWidth: 2, 
      borderColor: 'white',
    },

    anonymoustitle: {
      marginTop: 10,
      marginLeft: Platform.OS == 'ios' ? 5: 7,
      color: '#909090',
      fontSize: 20,
      fontFamily: 'GmarketSansTTFBold',
    },

    realnametitle: {
      marginTop: 10,
      marginLeft: Platform.OS == 'ios' ? 73: 62,
      color: '#909090',
      fontSize: 20,
      fontFamily: 'GmarketSansTTFBold',
    }
  });

  return (
    <View style = {styles.checkboxContainer}>
      <Text style = {styles.anonymoustitle}>
        익명
      </Text>
      <View style = {styles.radio}>
        <RadioButton
          value = 'first'
          status = { checked === 'first' ? 'checked' : 'unchecked' }
          onPress = {() => setChecked('first')}
          color = {'#909090'}
          uncheckedColor = {'#CECECE'}
        />
      </View>
      <Text style = {styles.realnametitle}>
        실명
      </Text>
      <View style = {styles.radio}>
        <RadioButton
          value = 'second'
          status = { checked === 'second' ? 'checked' : 'unchecked' }
          onPress = {() => setChecked('second')}
          color = {'#909090'}
          uncheckedColor = {'#CECECE'}
        />
      </View>
    </View>
  );
};
  
export default AnonymousCheck;