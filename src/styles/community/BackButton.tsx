import {Platform, StyleSheet} from 'react-native';

const backButtonStyles = StyleSheet.create ({
    communityBackButton: {
        marginTop: "1%",
        marginLeft: "5%"
    },

    infoBackButton: {
        marginTop: Platform.OS == 'ios' ? "8%" : "1%",
        marginLeft: Platform.OS == 'ios' ? "0%" : "5%",
    },

    bookmarkBackButton: {
        marginTop: Platform.OS == 'ios' ? "15%" : "5%",
        marginLeft: Platform.OS == 'ios' ? "0%" : "5%",
    },

    articleBackButton: {
        marginTop: Platform.OS == 'ios' ? "10%" : "5%",
        marginLeft: "5%"
    },

    searchBackButton: {
        marginTop: "7%",
        marginLeft: "5%"
    },
});

export default backButtonStyles;