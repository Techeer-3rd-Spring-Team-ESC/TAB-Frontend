import React , {Component} from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/post/TextInputbox';

class TitleInputbox extends Component {
    render () {
        return (
            <TextInput
                style = {styles.inputStyle}
                placeholder = '제목'
                placeholderTextColor = {'#909090'}
            >
            </TextInput>
        );
    };
};

export default TitleInputbox;