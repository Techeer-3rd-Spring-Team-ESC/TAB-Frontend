import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    subtitleContainer: {
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    verticleLine: {
        width: 5,
        height: Platform.OS == 'ios' ? '70%' : '80%',
        marginTop: Platform.OS == 'ios' ? 15 : 10,
        marginLeft: 20,
        backgroundColor: 'black'
    },

    subtitleText: {
        width: '90%',
        marginTop: Platform.OS == 'ios' ? 10 : 5,
        marginLeft: 10,
        color: "black",
        fontSize: Platform.OS == 'ios' ? 12 : 11,
        fontFamily: 'GmarketSansTTFBold',
        lineHeight: Platform.OS == 'ios' ? 30 : 25
    }
});
export default styles;