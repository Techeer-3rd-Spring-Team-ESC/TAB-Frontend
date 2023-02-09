import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        height: 1000,
        backgroundColor: 'white'
    },

    profilecontainer:{
        marginTop: Platform.OS == 'ios' ? 80 : 20,
        marginLeft: 20
    },

    postcontainer:{
        marginTop: Platform.OS == 'ios' ? 0 : 5,
        flexDirection: 'row',
    },

    articleContainer:{
        marginTop: Platform.OS == 'ios' ? 0 : 5,
        flexDirection: 'row',
    },

    buttoncontainer:{
        marginLeft: 160,
        marginTop: Platform.OS == 'ios' ? 3 : 0,
        flexDirection: 'row',
    }
});

export default styles;