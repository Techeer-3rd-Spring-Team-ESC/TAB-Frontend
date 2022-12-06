import React from "react";
import { TouchableOpacity, Platform, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const PostList = () => {
    const navigation = useNavigation<SignUpScreenProp>();

    return (
        <TouchableOpacity
            style={{ 
            backgroundColor: 'white',
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('Article')}
        >
            <Text
                numberOfLines= {2} 
                style={{
                width: '90%', 
                marginTop: 10,
                marginLeft: 20,
                color: 'black', 
                fontSize: Platform.OS == 'ios' ? 15 : 10,
                fontFamily: 'GmarketSansTTFMedium',
                lineHeight: 12
                }}>
                A Step-by-Step Guid -- Are you looking for a new, creative project? What about building your own Telegram bot in Python? Sounds fun
            </Text>
        </TouchableOpacity>
        
    );
};

export default PostList;