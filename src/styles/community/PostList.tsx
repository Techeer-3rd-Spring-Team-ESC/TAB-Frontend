import {StyleSheet, Platform} from 'react-native';

const postListStyles = StyleSheet.create ({
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 8
    },

    listTitle: {
        width: '90%', 
        marginTop: Platform.OS == 'ios' ? 10 : 5,
        marginLeft: 20,
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 12,
        fontFamily: 'GmarketSansTTFMedium',
        lineHeight: Platform.OS == 'ios' ? 20 : 15
    }
    
});

export default postListStyles;