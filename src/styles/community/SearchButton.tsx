import {Platform, StyleSheet} from 'react-native';

const searchButtonStyles = StyleSheet.create ({
    screenButtonStyle: {
        marginTop: "-6%",
        marginLeft: "90%"
    },

    buttonStyle: {
        marginTop: 10,
        marginLeft: Platform.OS == 'ios' ? "43%" : "35%",
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#51b05b',
        borderRadius: 8
    }
});

export default searchButtonStyles;