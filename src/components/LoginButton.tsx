import React from "react"; // 리액트 호출
import { TouchableOpacity, Text} from "react-native"; // 리액트 네이티브에서 제공하는 컴포넌트 추가
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../screens/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const MyButton = () => {
    const navigation = useNavigation<loginScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            padding: 8,
            backgroundColor: '#2BC63B',
            borderRadius: 8,
            borderTopColor: "red"
            }}
            onPress={() => navigation.navigate('Main')}
        >
            <Text style={{ 
                color: 'white', 
                fontSize: 20,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
                }}>
                로그인
            </Text>
        </TouchableOpacity>
    );
};

export default MyButton;