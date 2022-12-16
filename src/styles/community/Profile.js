import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    profileContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    profileText: {
        marginTop: Platform.OS == 'ios' ? 11 : 13,
        marginLeft: 20,
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 12,
        fontFamily: 'GmarketSansTTFBold',
    },

    profileImage: {
        width: 30,
        height: 30,
        marginTop: 5,
        marginLeft: 10,
        borderWidth: 1, 
        borderColor: 'black',
        borderRadius: 50
    }
});

export default styles;