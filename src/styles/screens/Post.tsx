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
        marginLeft: '6%',
        marginRight: '5%',
        fontFamily: 'GmarketSansTTFMedium',
        fontSize: 20
    },

    textbox: {
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
    },

    inputStyle: {
        height: Platform.OS == "ios" ? 370 : 230,
        marginTop: Platform.OS == "ios" ? 10 : 10,
        padding: 8,
        textAlignVertical: "top", // 안드로이드 텍스트 상단정렬
        fontFamily: 'GmarketSansTTFMedium',
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