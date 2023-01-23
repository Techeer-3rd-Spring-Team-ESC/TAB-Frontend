import React from "react";
import {TextInput} from "react-native";
import styles from '../../styles/post/TextInputbox';

interface Props {
    setText: React.Dispatch<React.SetStateAction<String>>;
}

function TextInputbox({setText}: Props) {
    return (
        <TextInput
            style = {styles.inputStyle}
            placeholder = "다른사람들과 공유하고싶은이야기를 적어주세요.&#13;&#10;링크나 사진등을 업로드할수있습니다."
            multiline = {true} // 아이폰 텍스트 상단정렬
            onChangeText={(text) => {setText(text)}}
            >
        </TextInput>
    );
};

export default TextInputbox;