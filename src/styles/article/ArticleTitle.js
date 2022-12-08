import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'white'
    },

    titleText: {
        marginTop: Platform.OS == 'ios' ? 10 : 5,
        marginLeft: 20,
        marginRight: 10,
        color: 'black',
        fontSize: Platform.OS == 'ios' ? 17 : 14,
        fontFamily: 'GmarketSansTTFBold',
        lineHeight: 20
    },

    subText: {
        marginTop: Platform.OS == 'ios' ? 10 : 5,
        marginLeft: 20,
        color: 'gray',
        fontSize: Platform.OS == 'ios' ? 15 : 12,
        fontFamily: 'GmarketSansTTFMedium'
    }
});
export default styles;