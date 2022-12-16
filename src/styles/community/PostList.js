import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 8
    },

    listTitle: {
        width: '90%', 
        marginTop: Platform.OS == 'ios' ? 20 : 10,
        marginLeft: 20,
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 10,
        fontFamily: 'GmarketSansTTFMedium',
        lineHeight: Platform.OS == 'ios' ? 20 : 15
    }
    
});

export default styles;