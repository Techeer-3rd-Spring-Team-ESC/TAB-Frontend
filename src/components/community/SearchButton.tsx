import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/SearchButton';

class SearchButton extends Component {
    render () {
        return (
            <TouchableOpacity
                style = {styles.buttonStyle}
            >
                <FontAwesome 
                    name = 'search' 
                    size = {20} 
                    color = '#fff'
                />
            </TouchableOpacity>
        );
    }
};

export default SearchButton;