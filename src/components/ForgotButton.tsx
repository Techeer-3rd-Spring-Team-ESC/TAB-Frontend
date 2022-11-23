import React from "react"; // 리액트 호출
import { TouchableOpacity, Text} from "react-native"; // 리액트 네이티브에서 제공하는 컴포넌트 추가
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../screens/RootStackParams';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const ForgotButton = () => {
    const navigation = useNavigation<loginScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 10,
            marginLeft: 20,
            marginRight: 20,
            padding: 8,
            alignItems: "center",
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('SignUp')}
        >
            <Text style={{ 
                color: 'green', 
                fontSize: 15,
                textAlign: "center",
                fontFamily: 'GmarketSansTTFLight',
                }}>
                계정을 잊으셨나요?
            </Text>
        </TouchableOpacity>
    );
};

export default ForgotButton;