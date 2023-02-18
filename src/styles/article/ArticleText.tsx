import {StyleSheet, Platform} from 'react-native';

const articleTextStyles = StyleSheet.create ({
    titleContainer: {
        backgroundColor: 'white'
    },

    articleText: {
        marginTop: 20,
        marginLeft: '5%',
        marginRight: '5%',
        width: '85%',
        color: 'gray',
        fontSize: Platform.OS == 'ios' ? 15 : 13,
        fontFamily: 'GmarketSansTTFMedium',
        lineHeight: 20,
    },

    hashtagText: {
        color: 'green',
        fontSize: Platform.OS == 'ios' ? 15 : 13,
        fontFamily: 'GmarketSansTTFMedium',
    },

    likeText: {
        marginTop: '30%',
        marginLeft: '20%',
        color: 'red',
        fontSize: Platform.OS == 'ios' ? 15 : 15,
        fontFamily: 'GmarketSansTTFBold',
    },

    bookmarkText: {
        marginTop: '5%',
        color: 'green',
        fontSize: Platform.OS == 'ios' ? 15 : 14,
        fontFamily: 'GmarketSansTTFBold',
    },

    verticleLine: {
        marginTop: '5%',
        marginLeft: '5%',
        marginBottom: '2%',
        width: '90%',
        height: 1,
        backgroundColor: "#CCCCCC"
    },

    communityVerticleLine: {
        marginTop: '5%',
        marginLeft: '3%',
        marginBottom: '2%',
        width: '95%',
        height: 1,
        backgroundColor: "#CCCCCC"
    },

    commentVerticleLine:{
        marginTop: '5%',
        marginBottom: '2%',
        width: '95%',
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    
    postVerticleLine: {
        marginTop: '5%',
        marginBottom: '2%',
        width: '100%',
        height: 2,
        backgroundColor: "#AAAAAA"
    },

    commentText: {
        marginTop: '-1%',
        marginLeft: '1%',
        marginRight: '5%',
        marginBottom: '5%',
        height: 50,
        width: '70%',
        color: 'gray',
        padding: 10,
        fontSize: Platform.OS == 'ios' ? 15 : 13,
        fontFamily: 'GmarketSansTTFMedium',
        lineHeight: 20,
    },

});
export default articleTextStyles;