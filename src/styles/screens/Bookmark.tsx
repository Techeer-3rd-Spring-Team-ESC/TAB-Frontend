import {StyleSheet, Platform} from 'react-native';

const bookmarkStyles = StyleSheet.create ({
    bookmarkcontainer: {
        marginTop: Platform.OS == 'ios' ? 30 : 0,
        flexDirection: 'row'
    },

    logo: {
        marginTop: Platform.OS == 'ios' ? 0 : 10,
    },

    returnbutton:{
        width: Platform.OS == 'ios' ? 180 : 150,
        height: Platform.OS == 'ios' ? 100 : 80,
        marginTop: Platform.OS == 'ios' ? 30 : 10,
        marginLeft: -5,
        resizeMode: 'contain',
    }

});

export default bookmarkStyles;