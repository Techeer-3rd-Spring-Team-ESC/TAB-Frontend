import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle: {
        marginTop: Platform.OS == "ios" ? 20 : 10,
        marginLeft: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8
    }
});

export default styles;