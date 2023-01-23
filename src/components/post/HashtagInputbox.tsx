import React from 'react';
import {TextInput} from 'react-native';
import styles from '../../styles/post/HashtagInputbox';

interface Props {
    setHashtag: React.Dispatch<React.SetStateAction<String>>;
}

function HashtagInputbox({setHashtag}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = '해쉬태그'
            placeholderTextColor = {'#909090'}
            onChangeText={(hashtag) => {setHashtag(hashtag)}}
        >
        </TextInput>
    );
};

export default HashtagInputbox;