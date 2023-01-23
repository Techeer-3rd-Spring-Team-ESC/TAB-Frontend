import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    titleContainer: {
        backgroundColor: 'white'
    },

    articleText: {
        width: '85%',
        marginLeft: 35,
        marginRight: 10,
        color: 'gray',
        fontSize: Platform.OS == 'ios' ? 15 : 13,
        fontFamily: 'GmarketSansTTFMedium',
        lineHeight: 20
    }
});
export default styles;