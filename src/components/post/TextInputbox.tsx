import React from "react";
import {Platform, TextInput, Text} from "react-native";

const TextInputbox = () => {
    
    return (
        <TextInput
            style={{
            height: Platform.OS == "ios" ? 370 : 230,
            marginTop: Platform.OS == "ios" ? 10 : 10,
            padding: 8,
            backgroundColor: 'white',
            borderColor: 'white', 
            borderRadius: 8,
            textAlignVertical:"top", // 안드로이드 텍스트 상단정렬
            
            }}
            placeholder="다른사람들과 공유하고싶은이야기를 적어주세요.&#13;&#10;링크나 사진등을 업로드할수있습니다."
            multiline={true} // 아이폰 텍스트 상단정렬
            >
            <Text style={{ 
                color: 'gray', 
                fontSize: 15,
                fontFamily: 'GmarketSansTTFLight',
                }}>
            </Text>
        </TextInput>
    );
};

export default TextInputbox;