import React, {Component}  from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/EmojiButton';

class LikeButton extends Component{
    render() {
        return (
            <TouchableOpacity style = {styles.buttonStyle}>
                <FontAwesome 
                    name = 'comment'
                    size = {20} 
                    color = 'gray'
                />
            </TouchableOpacity>
        );
    };
};

export default LikeButton;