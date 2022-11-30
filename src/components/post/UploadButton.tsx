import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type PostScreenProp = StackNavigationProp<RootStackParamList, 'Post'>;

const UploadButton = () => {
    const navigation = useNavigation<PostScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
            backgroundColor: '#2BC63B',
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('Main')}
        >
            <Text style={{ 
                color: 'white', 
                fontSize: 20,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
                }}>
                등록
            </Text>
        </TouchableOpacity>
    );
};

export default UploadButton;