import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    inputStyle: {
        marginTop: Platform.OS == 'ios' ? 5 : 0,
        marginLeft: 20,
        marginBottom: Platform.OS == "ios" ? 5 : 0,
        padding: 10
    }
});

export default styles;