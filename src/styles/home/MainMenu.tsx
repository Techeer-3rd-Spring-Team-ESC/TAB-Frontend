import {StyleSheet, Platform} from 'react-native';

const mainMenuStyles = StyleSheet.create ({
    
    mainContainer: {
        height: 1000,
        backgroundColor: 'white'
    },

    menuContainer: {
        marginTop: Platform.OS == 'ios' ? 40 : 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },

    communityMenu: {
        marginTop: 20,
        width: '43%',
        height: '120%',
        backgroundColor: '#83BD67',
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
        marginTop: Platform.OS == 'ios' ? 40 : 30,
        marginLeft: 40,
        marginRight: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12
    },

    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 17,
        fontFamily: 'GmarketSansTTFBold'
    },

    bookmarkMenu: {
        marginTop: 20,
        marginLeft: 20,
        width: '43%',
        height: '120%',
        backgroundColor: '#83BD67',
        borderRadius: 30,
    },

    informationMenu: {
        width: '90%',
        height: Platform.OS == 'ios' ? '20%' : '14%',
        marginTop: '20%',
        marginLeft: '5%',
        backgroundColor: '#83BD67',
        borderRadius: 30,
    },

    infoButtonStyle: {
        marginTop: Platform.OS == 'ios' ? 80 : 30,
        marginLeft: Platform.OS == 'ios' ? 100 : 130,
        marginRight: 20,
        marginBottom: 20,
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15
    },

    communityIconStyle: {
        marginTop: Platform.OS == 'ios' ? 40 : 30,
        marginLeft: 60,
    },

    bookmarkIconStyle: {
        marginTop: Platform.OS == 'ios' ? 40 : 10,
        marginLeft: Platform.OS == 'ios' ? 100 : 100,
    },

    informationIconStyle: {
        marginTop: Platform.OS == 'ios' ? 20 : 10,
        marginLeft: Platform.OS == 'ios' ? 30 : 20,
    },

    informationContainer: {
        flexDirection: 'row'
    }
});

export default mainMenuStyles;