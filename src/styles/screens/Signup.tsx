import {StyleSheet, Platform} from 'react-native';

const signStyles = StyleSheet.create ({
    container: {
      height: 1000,
      backgroundColor: 'white'
    },

    image: {
      width: "50%",
      height: 100,
      marginTop: Platform.OS == 'ios' ? 200 : 50,
      marginLeft: "25%",
      marginBottom: "10%"
    },

    signupText: {
      marginTop: Platform.OS == 'ios' ? 200 : 100,
      marginBottom: 30,
      textAlign: "center",
      color: "black",
      fontFamily: 'GmarketSansTTFBold',
      fontSize: 30,
    },

    idContainer: {
      flexDirection: 'row'
    },

    idInputStyle: {
      marginTop: 4, 
      padding: 8,
      backgroundColor: 'white',
      borderRadius: 8
    },

    inputIDBox: {
      height: 50,
      marginTop: 20,
      marginLeft: 20,
      width: '64%',
      fontSize: 10,
      fontFamily: 'GmarketSansTTFLight',
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    inputStyle: {
      marginTop: 4,
      marginRight: 20,
      padding: 8,
      backgroundColor: 'white',
      borderColor: '#FFFFF',
      borderRadius: 8
    },

    emailCheckbox: {
      marginTop: 16,
      padding: 4,
      paddingHorizontal: 10
    },

    inputBox: {
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

    signupBox: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 30,
      fontFamily: 'GmarketSansTTFLight'
    }
  });


export default signStyles;