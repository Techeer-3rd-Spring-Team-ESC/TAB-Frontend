import {StyleSheet, Platform} from 'react-native';

const communityStyles = StyleSheet.create ({
    container: {
        height: 1000,
        backgroundColor: 'white'
    },

    titleContainer: {
        marginTop: Platform.OS == 'ios' ? "12%" : "5%",
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    articleContainer: {
        marginTop: Platform.OS == 'ios' ? "12%" : "3%",
        height: '5%',
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row'
    },

    searchContainer: {
        marginTop: Platform.OS == 'ios' ? "12%" : 0,
        height: '9%',
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row'
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
        marginTop: Platform.OS == 'ios' ? 30 : 0,
        resizeMode: 'contain',
    },
    
    search: {
        marginTop: Platform.OS == 'ios' ? 30 : 10,
        marginLeft: "5%",
        width: '90%',
        fontFamily: 'GmarketSansTTFLight',
        fontSize: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
    },

    listcontainer: {
        marginTop: Platform.OS == 'ios' ? 30 : 0,
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

export default communityStyles;