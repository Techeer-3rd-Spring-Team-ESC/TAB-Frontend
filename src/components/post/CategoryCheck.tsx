import React from "react";
import {Platform, Text, StyleSheet, View} from "react-native";
import {RadioButton} from 'react-native-paper';

const AnonymousCheck = () => {
  const [checked, setChecked] = React.useState('first');
  const styles = StyleSheet.create({

    checkboxContainer: {
      marginLeft: 20, 
      marginRight: 300,
      marginBottom: Platform.OS == "ios" ? 10 : 0,
      padding: 10,
      borderRadius: 8,
      flexDirection: "row",
    },

    radio: {
      marginLeft: 10,
      backgroundColor: Platform.OS == "ios" ? '#CECECE': 'white',
      borderRadius: 20,
      borderWidth: 2, 
      borderColor: 'white',
      alignSelf: "center"
    },

    informationtitle: {
      marginTop: 10,
      marginLeft: 5, 
      fontSize: 20,
      fontFamily: 'GmarketSansTTFBold',
      color: '#909090'
    },

    questiontitle: {
      marginTop: 10,
      marginLeft: Platform.OS == "ios" ? 73: 60,
      fontSize: 20,
      fontFamily: 'GmarketSansTTFBold',
      color: '#909090'
    }


  });

  return (
    <View style={styles.checkboxContainer}>
      <Text style={styles.informationtitle}>
        정보
      </Text>
      <View style={styles.radio}>
        <RadioButton
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
          color={'#909090'}
          uncheckedColor={'#CECECE'}
        />
      </View>
      <Text style={styles.questiontitle}>
        질문
      </Text>
      <View style={styles.radio}>
        <RadioButton
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
          color={'#909090'}
          uncheckedColor={'#CECECE'}
        />
      </View>
    </View>
  );
};
  
export default AnonymousCheck;