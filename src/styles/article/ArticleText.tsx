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

    verticleLine: {
        marginTop: '2%',
        marginLeft: '5%',
        marginBottom: '2%',
        width: '90%',
        height: 1,
        backgroundColor: "#CCCCCC"
    }

});
export default articleTextStyles;