import React  from 'react';
import {TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/community/EmojiButton';

function CommentButton() {
    return (
        <TouchableOpacity style = {styles.articleCommentButtonStyle}>
            <FontAwesome 
                name = 'comment'
                size = {20} 
                color = 'gray'
            />
        </TouchableOpacity>
    );
};

export default CommentButton;