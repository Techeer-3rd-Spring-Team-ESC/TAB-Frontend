import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    tagStyle: {
        width: '20%',
        height: Platform.OS == 'ios' ? 30 : 27,
        marginTop: Platform.OS == 'ios' ? 10 : 5,
        marginLeft: 20,
        padding: 7,
        backgroundColor: '#A3F4A1',
        borderRadius: 8,
        borderColor: 'black'
    },

    tagTitle: {
        color: 'black', 
        fontSize: Platform.OS == 'ios' ? 15 : 13,
        fontFamily: 'GmarketSansTTFMedium',
        textAlign: 'center'
    }
    
});


export default styles;