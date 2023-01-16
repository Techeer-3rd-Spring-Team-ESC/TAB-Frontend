import {StyleSheet, Platform} from 'react-native';

const signStyles = StyleSheet.create ({
    container: {
      height: 1000,
      backgroundColor: 'white'
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

    inputIDBox: {
      height: 50,
      marginTop: 20,
      marginLeft: 20,
      fontSize: 10,
      fontFamily: 'GmarketSansTTFLight',
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
    },

    domainBox: {
      height: 50,
      width: Platform.OS == 'ios' ? 150 : 128,
      marginTop: 20,
      marginLeft: 10,
      fontSize: 10,
      fontFamily: 'GmarketSansTTFLight',
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1
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