import {StyleSheet, Platform} from 'react-native';

const informationStyles = StyleSheet.create ({
    container: {
        height: 1000,
        backgroundColor: 'white'
    },

    image: {
        width: 90,
        height: Platform.OS == 'ios' ? 70 : 60,
        marginTop: Platform.OS == 'ios' ? 10 : 0,
        marginLeft: Platform.OS == 'ios' ? 20 : 10,
    },

    listcontainer: {
        
    },

    crollingpost:{
        marginTop: Platform.OS == 'ios' ? 10 : 10,
        flexDirection: 'row',
    },

    verticleLine: {
        marginTop: Platform.OS == 'ios' ? 5 : 0,
        width: '91%',
        height: 2,
        marginLeft: 20,
        backgroundColor: '#909090',
    },

});

export default informationStyles;