import {StyleSheet, Platform} from 'react-native';

const postStyles = StyleSheet.create ({
    container: {
        height: 1000,
        backgroundColor: 'white'
    },

    anonymoustext:{
        marginTop: Platform.OS == 'ios' ? 80 : 20,
        marginLeft: 20,
        fontFamily: 'GmarketSansTTFMedium',
        fontSize: Platform.OS == 'ios' ? 25 : 20,
        color:'#CECECE'
    },

    anonymous:{
        marginLeft: 5,
        flexDirection: 'row'
    },

    categorytext:{
        marginTop: Platform.OS == 'ios' ? 20 : 20,
        marginLeft: 20,
        fontFamily: 'GmarketSansTTFMedium',
        fontSize: Platform.OS == 'ios' ? 25 : 20,
        color: '#CECECE'
    },

    category:{
        marginLeft: Platform.OS == 'ios' ? 5 : 10,
        flexDirection: 'row'
    },

    verticleLine: {
        width: '91%',
        height: 3,
        marginLeft: 20,
        borderRadius: 50,
        backgroundColor: '#CECECE',
    },

    title: {
        marginLeft: 10,
        marginRight: 10,
    },

    textbox: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
        borderWidth: 2, 
        borderColor: '#909090',
    },

    hashtag: {
        marginTop: Platform.OS == 'ios' ? 10 : 0,
        marginLeft: 10,
        marginRight: 10,
    },
  
    buttoncontainer: {
        flexDirection: 'row'
    }
});

export default postStyles;