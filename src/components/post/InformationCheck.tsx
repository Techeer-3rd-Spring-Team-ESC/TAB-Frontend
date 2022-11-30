import React from "react";
import {Text, StyleSheet, View} from "react-native";
import {Checkbox} from 'react-native-paper';

const InformationCheck = () => {
  const [checked, setChecked] = React.useState(false);
  const styles = StyleSheet.create({

    checkboxContainer: {
      marginTop: 10,
      marginLeft: 20, 
      marginRight: 300,
      marginBottom: 20,
      padding: 10,
      borderRadius: 8,
      flexDirection: "row",
    },

    checkbox: {
      marginLeft: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      borderWidth: 2, 
      borderColor: '#2BC63B',
      alignSelf: "center"
    },

    buttontitle: {
      marginTop: 10,
      marginLeft: 5, 
      fontSize: 20,
      fontFamily: 'GmarketSansTTFMedium',
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
      />
      </View>
    </View>
  );
};
  
export default InformationCheck;