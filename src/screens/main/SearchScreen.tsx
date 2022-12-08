import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CancelButton from '../../components/post/CancelButton';


function SearchScreen() {
    const styles = StyleSheet.create({
        container: {
            height: 1000,
            backgroundColor: 'white'
        },
        
        text: {
            marginTop: 200,
            textAlign: 'center'
        },

        button: {
            marginTop: 100,
            marginRight: 120,
            alignItems: 'center', 
            justifyContent: 'center'
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                검색 화면
            </Text>
            <View style={styles.button}>
                <CancelButton/>
            </View>
        </View>
    );
}
export default SearchScreen;