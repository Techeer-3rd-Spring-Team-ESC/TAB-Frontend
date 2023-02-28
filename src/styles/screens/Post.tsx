import {StyleSheet, Platform} from 'react-native';

const postStyles = StyleSheet.create ({
    container: {
        height: 1000,
        backgroundColor: 'white'
    },

    bottomContainer: {
        marginTop: Platform.OS == 'ios' ? "57%" : "7%"
    },

    postButtonStyle: {
        marginTop: "1%",
        marginLeft: "27%"
    },

    verticleLine: {
        marginTop: '3%',
        marginLeft: '5%',
        marginBottom: '2%',
        width: '90%',
        height: 1,
        backgroundColor: "#CCCCCC"
    },

    title: {
        marginTop: '3%',
        marginLeft: '6%',
        marginRight: '5%',
        fontFamily: 'GmarketSansTTFMedium',
        fontSize: 20
    },

    textbox: {
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
        height: '35%'
    },

    inputStyle: {
        height: Platform.OS == "ios" ? 370 : 230,
        marginTop: Platform.OS == "ios" ? 10 : 10,
        padding: 8,
        textAlignVertical: "top", // 안드로이드 텍스트 상단정렬
        fontFamily: 'GmarketSansTTFMedium',
    },

    hashtag: {
        marginTop: '-1%',
        marginLeft: '1%',
        marginRight: '5%',
        width: '70%',
        color: 'green',
        padding: 10,
        fontSize: Platform.OS == 'ios' ? 15 : 13,
        fontFamily: 'GmarketSansTTFMedium',
        lineHeight: 20,
    },
  
    postVerticleLine: {
        marginTop: '2%',
        marginBottom: '2%',
        width: '100%',
        height: 2,
        backgroundColor: "#AAAAAA"
    },

    buttoncontainer: {
        flexDirection: 'row'
    },

    postButton: {
        marginTop: '2%',
        marginLeft: '5%',
        width: '10%',
    },

    anonymousButton: {
        marginTop: '3.5%',
        marginLeft: '3%',
        width: '10%',
        height: '50%',
    },

    
});

export default postStyles;