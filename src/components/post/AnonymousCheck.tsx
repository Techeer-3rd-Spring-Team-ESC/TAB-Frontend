import React from "react";
import {Platform, Text, StyleSheet, View} from "react-native";
import {RadioButton} from 'react-native-paper';

const AnonymousCheck = () => {
  const [checked, setChecked] = React.useState('first');
  const styles = StyleSheet.create({

    checkboxContainer: {
      marginLeft: 20, 
      marginRight: 300,
      marginBottom: Platform.OS == "ios" ? 20 : 10,
      padding: 10,
      borderRadius: 8,
      flexDirection: "row",
    },

    radio: {
      marginLeft: 10,
      backgroundColor: Platform.OS == "ios" ? '#A4E9A2': 'white',
      borderRadius: 20,
      borderWidth: 2, 
      borderColor: 'white',
      alignSelf: "center"
    },

    anonymoustitle: {
      marginTop: 10,
      marginLeft: Platform.OS == "ios" ? 5: 7,
      fontSize: 20,
      fontFamily: 'GmarketSansTTFBold',
      color: '#2BC63B',
      theme: '#2BC63B'
    },

    realnametitle: {
      marginTop: 10,
      marginLeft: Platform.OS == "ios" ? 73: 62,
      fontSize: 20,
      fontFamily: 'GmarketSansTTFBold',
      color: '#2BC63B',
      theme: '#2BC63B'
    }


  });

  return (
    <View style={styles.checkboxContainer}>
      <Text style={styles.anonymoustitle}>
        익명
      </Text>
      <View style={styles.radio}>
        <RadioButton
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
          color={'#2BC63B'}
          uncheckedColor={'#2BC63B'}
        />
      </View>
      <Text style={styles.realnametitle}>
        실명
      </Text>
      <View style={styles.radio}>
        <RadioButton
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
          color={'#2BC63B'}
          uncheckedColor={'#2BC63B'}
        />
      </View>
    </View>
  );
};
  
export default AnonymousCheck;