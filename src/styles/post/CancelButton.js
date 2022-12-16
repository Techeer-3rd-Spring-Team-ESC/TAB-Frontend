import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle: {
        marginTop: Platform.OS == 'ios' ? 30 : 20,
        marginLeft: Platform.OS == 'ios' ? 130 : 140,
        marginRight: 20,
        marginBottom: Platform.OS == 'ios' ? 30 : 50,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: '#909090',
        borderWidth: 1
    },

    buttonTitle: {
        marginTop: 5,
        textAlign: 'center',
        color: '#909090',
        fontSize: Platform.OS == 'ios' ? 20 : 15,
        fontFamily: 'GmarketSansTTFMedium'
    }
});

export default styles;