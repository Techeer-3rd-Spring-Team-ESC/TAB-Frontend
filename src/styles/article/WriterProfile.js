import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    profileContainer: {
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    profileImage: {
        width: 50,
        height: 50,
        marginTop: 5,
        marginLeft: 10,
        borderWidth: 1, 
        borderColor: 'black',
        borderRadius: 50
    },

    profileText: {
        marginTop: Platform.OS == 'ios' ? 11 : 13,
        marginLeft: 20,
        padding: 4
    },

    profilename: {
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 20 : 15,
        fontFamily: 'GmarketSansTTFBold'
    },

    profileMessage: {
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 13,
        fontFamily: 'GmarketSansTTFLight'
    }
});
export default styles;