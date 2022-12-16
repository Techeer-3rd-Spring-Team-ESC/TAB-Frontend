import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle: {
        marginTop: Platform.OS == "ios" ? 30 : 20,
        marginRight: 20,
        marginBottom: Platform.OS == "ios" ? 30 : 50,
        padding: 10,
        backgroundColor: '#2BC63B',
        borderRadius: 8
    },

    buttonTitle: {
        marginTop: 5,
        textAlign: 'center',
        color: 'white',
        fontSize: Platform.OS == "ios" ? 20 : 15,
        fontFamily: 'GmarketSansTTFMedium'   
    }
});

export default styles;