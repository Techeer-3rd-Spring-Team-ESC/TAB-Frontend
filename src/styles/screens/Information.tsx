import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    container: {
        height: 1000,
        backgroundColor: 'white'
    },

    image: {
        width: 30,
        height: 30,
        marginTop: Platform.OS == 'ios' ? 30 : 13,
    },

    listcontainer: {
        
    },

    crollingpost:{
        marginTop: Platform.OS == 'ios' ? 10 : 10,
        flexDirection: 'row',
    },

    verticleLine: {
        marginTop: Platform.OS == 'ios' ? 10 : 10,
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