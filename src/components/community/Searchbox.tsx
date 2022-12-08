import React, {Component} from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/community/SearchBox';

class SearchBox extends Component {
    render(){
        return (
            <TextInput 
                style = {styles.inputStyle}
                placeholder = '사람, 태그, 키워드로 검색하기'
            >
            </TextInput>
        );
    };
};

export default SearchBox;