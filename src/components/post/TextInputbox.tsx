import React from "react";
import { TextInput, Text} from "react-native";

const TextInputbox = () => {
    
    return (
        <TextInput
            style={{
            height: 200,
            marginTop: 4, 
            padding: 8,
            backgroundColor: 'white',
            borderColor: '#FFFFF', 
            borderRadius: 8,
            textAlignVertical:"top", // 안드로이드 텍스트 상단정렬
            
            }}
            placeholder="다른사람들과 공유하고싶은이야기를 적어주세요.&#13;&#10;링크나 사진등을 업로드할수있습니다."
            multiline={true} // 아이폰 텍스트 상단정렬
            >
            <Text style={{ 
                marginTop: 10,
                color: 'gray', 
                fontSize: 15,
                
                fontFamily: 'GmarketSansTTFLight',
                }}>
            </Text>
        </TextInput>
    );
};

export default TextInputbox;