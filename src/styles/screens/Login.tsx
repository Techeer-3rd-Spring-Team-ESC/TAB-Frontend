import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    height: 1000,
    backgroundColor: 'white'
  },

  image: {
    width: "50%",
    height: 100,
    marginTop: Platform.OS == 'ios' ? 200 : 100,
    marginLeft: "25%"
  },

  logintext: {
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontFamily: 'GmarketSansTTFBold'
  },

  inputbox: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    fontFamily: 'GmarketSansTTFLight',
    fontSize: 10
  },

  loginbox: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    borderColor: 'black'
  },

  missing:{
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems : 'center',
    border: 'none',
    fontSize: 30,
  }

});

export default styles;