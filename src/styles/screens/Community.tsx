import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        height: 1000,
        backgroundColor: 'white'
    },

    homeButton: {
        marginTop: Platform.OS == 'ios' ? 60 : 10,
        marginLeft: Platform.OS == 'ios' ? 310 : 320,
    },

    buttonText:{
        marginTop: 5,
        marginBottom: 5,
        fontSize: Platform.OS == 'ios' ? 25 : 20,
        fontFamily: 'GmarketSansTTFMedium',
        color: 'gray'
    },

    searchcontainer: {
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

    listcontainer: {
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
    }
});

export default styles;