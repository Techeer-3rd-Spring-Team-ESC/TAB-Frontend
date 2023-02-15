import {StyleSheet, Platform} from 'react-native';

const homeStyles = StyleSheet.create ({
    container: {
        height: 1000,
        backgroundColor: 'white'
    },
    
    searchcontainer: {
        marginTop: Platform.OS == 'ios' ? 1 : 0,
        flexDirection: 'row',
    },

    image: {
        width: 130,
        height: 60,
        marginTop: Platform.OS == 'ios' ? 30 : 13,
        resizeMode: 'contain',
    },
    
    search: {
        height: 60,
        marginTop: Platform.OS == 'ios' ? 30 : 10,
        marginRight: 50,
        fontFamily: 'GmarketSansTTFLight',
        fontSize: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
    },

    postcontainer:{
        flexDirection: 'row',
    },

    verticleLine: {
        marginTop: Platform.OS == 'ios' ? 10 : 0,
        width: '91%',
        height: 2,
        marginLeft: 20,
        backgroundColor: '#909090',
    },

    post: {
        marginLeft: Platform.OS == 'ios' ? 220 : 200,
    },

    page: {
        marginTop: '5%',
        flexDirection: 'row'
    }
});

export default homeStyles;