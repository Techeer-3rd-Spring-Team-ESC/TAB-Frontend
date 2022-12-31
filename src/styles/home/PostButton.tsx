import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle: {
        marginLeft: Platform.OS == 'ios' ? 130 : 140,
        marginRight: 10,
        padding: 10,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: -10
    }
});

export default styles;