import {StyleSheet, Platform} from 'react-native';

const profileStyles = StyleSheet.create ({
    profileContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },

    profileText: {
        marginTop: Platform.OS == 'ios' ? 11 : 10,
        marginLeft: 20,
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 15,
        fontFamily: 'GmarketSansTTFMedium',
    },

    commentProfileText: {
        marginTop: Platform.OS == 'ios' ? 11 : 10,
        marginLeft: 0,
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 15,
        fontFamily: 'GmarketSansTTFMedium',
    },

    creactedText: {
        marginTop: Platform.OS == 'ios' ? 11 : 10,
        marginLeft: 10,
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 13,
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

export default profileStyles;