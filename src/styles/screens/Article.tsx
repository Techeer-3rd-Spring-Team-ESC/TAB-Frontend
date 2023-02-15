import {StyleSheet, Platform} from 'react-native';

const articleStyles = StyleSheet.create ({
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

    hashtag: {
        marginTop: '10%',
        marginLeft: 20,
        width: '90%',
    },

    buttoncontainer:{
        marginLeft: 160,
        marginTop: Platform.OS == 'ios' ? 3 : 0,
        flexDirection: 'row',
    },

    newButtoncontainer:{
        marginTop: '5%',
        marginLeft: '30%',
        flexDirection: 'row',
    },

    commentContainer:{
        flexDirection: 'row'
    },

    heartButton: {
        marginTop: '5%',
        marginLeft: '5%',
        width: '20%',
        height: '80%',
        borderColor: '#DD4A4A',
        padding: 10,
        borderWidth: 3,
        borderRadius: 8
    },

    bookmarkButton: {
        marginTop: '5%',
        marginLeft: '5%',
        width: '20%',
        height: '80%',
        borderColor: 'green',
        padding: 15,
        borderWidth: 3,
        borderRadius: 8
    },

    commentButton: {
        marginTop: '2%',
        marginLeft: '15%',
        width: '10%',
        height: '50%',
    }
});

export default articleStyles;