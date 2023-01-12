import {StyleSheet, Platform} from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const mainMenuStyles = StyleSheet.create ({
    
    mainContainer: {
        height: 1000,
        backgroundColor: 'white'
    },

    menuContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },

    communityMenu: {
        marginTop: 20,
        width: '43%',
        height: '100%',
        backgroundColor: '#FFB65E',
        borderRadius: 30,
    },

    communityText: {
        marginTop: 20,
        marginLeft: 20,
        color: 'white',
        fontSize: 20,
        fontFamily: 'GmarketSansTTFBold'
    },

    buttonStyle: {
        marginTop: 160,
        marginLeft: 40,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 8
    },

    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
        fontFamily: 'GmarketSansTTFBold'
    },

    bookmarkMenu: {
        marginTop: 20,
        marginLeft: 20,
        width: '43%',
        height: '100%',
        backgroundColor: '#83BD67',
        borderRadius: 30,
    },

    informationMenu: {
        width: '90%',
        height: '15%',
        marginTop: '10%',
        marginLeft: '5%',
        backgroundColor: '#66B6FF',
        borderRadius: 30,
    },

    infoButtonStyle: {
        marginTop: 50,
        marginLeft: 240,
        marginRight: 20,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 8
    },
});

export default mainMenuStyles;