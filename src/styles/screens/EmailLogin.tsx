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
    marginLeft: "25%",
    marginBottom: "20%"
  },

  logintext: {
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'GmarketSansTTFBold',
    fontSize: 30,
  },

  inputbox: {
    marginLeft: 40,
    marginRight: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    fontFamily: 'GmarketSansTTFLight',
    fontSize: 10,
  },

  loginbox: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 30,
    fontFamily: 'GmarketSansTTFLight',
  },

  missing:{
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems : 'center',
    fontSize: 30,
    border: 'none'
  }

});

export default styles;