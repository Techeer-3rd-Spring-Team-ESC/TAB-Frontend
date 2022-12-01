import React from "react";
import {Text, StyleSheet, View} from "react-native";
import {Checkbox} from 'react-native-paper';

const QuestionCheck = () => {
  const [checked, setChecked] = React.useState(false);
  const styles = StyleSheet.create({

    checkboxContainer: {
      marginLeft: 90,  
      marginRight: 200,
      marginBottom: 20,
      padding: 10,
      borderRadius: 8,
      flexDirection: "row",
    },

    checkbox: {
      marginLeft: 20,
      backgroundColor: '#A4E9A2',
      borderRadius: 20,
      borderWidth: 2, 
      borderColor: 'white',
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
        질문
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
  
export default QuestionCheck;