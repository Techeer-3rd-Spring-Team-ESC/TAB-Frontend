import React from "react";
import { TextInput, Text} from "react-native";

const Searchbox = () => {
    
    return (
        <TextInput
            style={{ 
            padding: 10,
            backgroundColor: 'white',
            borderColor: '#FFFFF',
            borderRadius: 8,
            }}
            placeholder="사람, 태그, 키워드로 검색하기"
        >
        </TextInput>
    );
};

export default Searchbox;