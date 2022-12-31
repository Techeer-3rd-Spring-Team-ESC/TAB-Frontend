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
        marginTop: Platform.OS == 'ios' ? 20 : 10,
        marginLeft: 20,
        marginBottom: Platform.OS == 'ios' ? 10 : 5,
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 30 : 25,
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
});

export default titleStyles;