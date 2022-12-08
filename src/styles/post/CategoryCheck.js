import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    checkboxContainer: {
      marginLeft: 20, 
      marginRight: 300,
      marginBottom: Platform.OS == 'ios' ? 10 : 0,
      padding: 10,
      borderRadius: 8,
      flexDirection: 'row'
    },

    radio: {
      marginLeft: 10,
      backgroundColor: Platform.OS == 'ios' ? '#CECECE': 'white',
      borderRadius: 20,
      borderWidth: 2, 
      borderColor: 'white',
      alignSelf: 'center'
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
      marginLeft: Platform.OS == 'ios' ? 73: 60,
      fontSize: 20,
      fontFamily: 'GmarketSansTTFBold',
      color: '#909090'
    }
  });

export default styles;