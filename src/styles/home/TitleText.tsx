import {StyleSheet, Platform} from 'react-native';

const titleStyles = StyleSheet.create ({
    logintext: {
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontFamily: 'GmarketSansTTFBold'
    },

    titletext: {
        marginTop: Platform.OS == 'ios' ? "20%" : "20%",
        marginLeft: 20,
        marginBottom: Platform.OS == 'ios' ? 10 : "5%",
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 25,
        fontFamily: 'GmarketSansTTFBold'
    },

    communityTitletext: {
        marginTop: "-5%",
        marginLeft: Platform.OS == 'ios' ? "36%" : "40%",
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 20,
        fontFamily: 'GmarketSansTTFBold'
    },

    postTitletext: {
        marginTop: "1%",
        marginLeft: Platform.OS == 'ios' ? "30%" : "35%",
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 20,
        fontFamily: 'GmarketSansTTFBold'
    },

    articleTitletext: {
        marginTop: Platform.OS == 'ios' ? "-7%" : "-5%",
        marginLeft: Platform.OS == 'ios' ? "40%" : "43%",
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 23,
        fontFamily: 'GmarketSansTTFBold'
    },

    bookmarkTitletext: {
        marginTop: Platform.OS == 'ios' ? "-6%" : "-5%",
        marginLeft: Platform.OS == 'ios' ? "35%" : "37%",
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 23,
        fontFamily: 'GmarketSansTTFBold'
    },

    searchTitletext: {
        marginTop: Platform.OS == 'ios' ? "10%" : "-6%",
        marginLeft: Platform.OS == 'ios' ? "35%" : "43%",
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 23,
        fontFamily: 'GmarketSansTTFBold'
    },

    infoTitletext: {
        marginTop: Platform.OS == 'ios' ? "-7%" : "-6%",
        marginLeft: Platform.OS == 'ios' ? "40%" : "45%",
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 23,
        fontFamily: 'GmarketSansTTFBold'
    },

    pagetext: {
        marginTop: Platform.OS == 'ios' ? 30 : 17,
        marginLeft: Platform.OS == 'ios' ? 26 : 15,
        marginBottom: Platform.OS == 'ios' ? 10 : 5,
        color: 'green',
        fontSize: Platform.OS == 'ios' ? 20 : 15,
        fontFamily: 'GmarketSansTTFMedium'
    },

    bookmarktext: {
        marginTop: Platform.OS == 'ios' ? 125 : 67,
        marginLeft: 20,
        marginBottom: Platform.OS == 'ios' ? 20 : 15,
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 35 : 30,
        fontFamily: 'GmarketSansTTFBold'
    },

    infotext: {
        marginTop: Platform.OS == 'ios' ? 30 : 10,
        marginLeft: 20,
        marginBottom: Platform.OS == 'ios' ? 10 : 5,
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 25,
        fontFamily: 'GmarketSansTTFBold'
    },

    postText: {
        marginLeft: Platform.OS == 'ios' ? "0%" : "8%",
        color: 'green',
        fontSize: Platform.OS == 'ios' ? 25 : 20,
        fontFamily: 'GmarketSansTTFMedium',
    },

    anonymousText: {
        marginTop: Platform.OS == 'ios' ? "3.5%" : "3%",
        marginLeft: '50%',
        color: 'gray',
        fontSize: 17,
        fontFamily: 'GmarketSansTTFBold'
    }
});

export default titleStyles;