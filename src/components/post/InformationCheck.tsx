import React from "react";
import {Platform, Text, StyleSheet, View} from "react-native";
import {Checkbox} from 'react-native-paper';

const InformationCheck = () => {
  const [checked, setChecked] = React.useState(false);
  const styles = StyleSheet.create({

    checkboxContainer: {
      marginLeft: 90, 
      marginRight: 100,
      padding: 10,
      borderRadius: 8,
      flexDirection: "row",
    },

    checkbox: {
      marginLeft: 10,
      backgroundColor: Platform.OS == "ios" ? '#A4E9A2': 'white',
      borderRadius: 8,
      borderWidth: 2, 
      borderColor: 'white',
      alignSelf: "center"
    },

    buttontitle: {
      marginTop: Platform.OS == "ios" ? 10 : 8,
      marginLeft: 5, 
      fontSize: 20,
      fontFamily: 'GmarketSansTTFBold',
      color: '#2BC63B',
    }


  });

  return (
    <View style={styles.checkboxContainer}>
      <Text style={styles.buttontitle}>
        정보
      </Text>
      <View style={styles.checkbox}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color={'#2BC63B'}
        uncheckedColor={'#A4E9A2'}
      />
      </View>
    </View>
  );
};
  
export default InformationCheck;