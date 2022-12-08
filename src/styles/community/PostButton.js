import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    buttonStyle: {
        marginLeft: Platform.OS == 'ios' ? 110 : 140,
        marginRight: 10,
        padding: 10,
        backgroundColor: 'white'
    }
});

export default styles;