import React from "react";
import {Platform, TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type PostScreenProp = StackNavigationProp<RootStackParamList, 'Post'>;

const CancelButton = () => {
    const navigation = useNavigation<PostScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
                marginTop: Platform.OS == "ios" ? 30 : 20,
                marginLeft: Platform.OS == "ios" ? 130 : 140,
                marginRight: 20,
                marginBottom: Platform.OS == "ios" ? 30 : 50,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 8,
                borderColor: '#909090',
                borderWidth: 1,
            }}
            onPress={() => navigation.navigate('Main')}
        >
            <Text style={{ 
                color: '#909090',
                marginTop: 5,  
                fontSize: Platform.OS == "ios" ? 20 : 15,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
            }}>
                취소
            </Text>
        </TouchableOpacity>
    );
};

export default CancelButton;