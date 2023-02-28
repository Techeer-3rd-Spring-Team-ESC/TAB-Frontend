import {Platform, StyleSheet} from 'react-native';

const emojiButtonStyles = StyleSheet.create ({
    buttonStyle: {
        marginTop: '-1%',
        marginLeft: '33%',
        padding: 10
    },

    articleButtonStyle: {
        marginTop: '-0.5%',
        marginLeft: Platform.OS == 'ios' ? "10%" : "15%",
        width: '10%',
        padding: 10
    },

    likeCountStyle: {
        marginTop: '2%'
    },

    articleLikeCountStyle: {
        marginTop: '2%'
    },

    commentButtonStyle: {
        marginLeft: 5,
        padding: 8
    },

    articleLikeButtonStyle: {
        marginTop: '-1%',
        marginLeft: 10,
        padding: 8
    },

    articleCommentButtonStyle: {
        marginTop: '-1.5%',
        marginLeft: 10,
        padding: 8
    },

    titleButtonStyle: {
        marginTop: Platform.OS == 'ios' ? '-9%' : '-8%',
        marginLeft: Platform.OS == 'ios' ? '65%' : '65%'
    },
});

export default emojiButtonStyles;