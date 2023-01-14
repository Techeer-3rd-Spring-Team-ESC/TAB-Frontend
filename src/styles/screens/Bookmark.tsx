import {StyleSheet, Platform} from 'react-native';

const bookmarkStyles = StyleSheet.create ({
    bookmarkcontainer: {
        marginTop: Platform.OS == 'ios' ? -50 : -30,
        flexDirection: 'row'
    },

    logo: {
        marginTop: Platform.OS == 'ios' ? 110 : 55,
    },
});

export default bookmarkStyles;