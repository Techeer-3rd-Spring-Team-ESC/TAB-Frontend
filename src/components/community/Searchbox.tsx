import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Searchbox = () => {
    const styles = StyleSheet.create({
        inputStyle: {
            padding: 10,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8
        }
    });

    return (
        <TextInput 
            style = {styles.inputStyle}
            placeholder = '사람, 태그, 키워드로 검색하기'
        >
        </TextInput>
    );
};

export default Searchbox;