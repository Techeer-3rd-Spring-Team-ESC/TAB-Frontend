import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    checkboxContainer: {
      marginLeft: 20, 
      marginRight: 300,
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

export default styles;