import React from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import searchButtonStyles from '../../styles/community/SearchButton';

function SearchButton() {
    return (
        <TouchableOpacity
            style = {searchButtonStyles.buttonStyle}
        >
            <FontAwesome 
                name = 'search' 
                size = {20} 
                color = '#fff'
            />
        </TouchableOpacity>
    );
};

export default SearchButton;