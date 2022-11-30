import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type PostScreenProp = StackNavigationProp<RootStackParamList, 'Post'>;

const CancelButton = () => {
    const navigation = useNavigation<PostScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: 20,
            marginLeft: 100,
            marginRight: 20,
            marginBottom: 10,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            borderColor: 'black',
            borderWidth: 1, 
            }}
            onPress={() => navigation.navigate('Main')}
        >
            <Text style={{ 
                color: '#2BC63B',
                marginTop: 5,  
                fontSize: 20,
                fontFamily: 'GmarketSansTTFMedium',
                textAlign: 'center'
                }}>
                취소
            </Text>
        </TouchableOpacity>
    );
};

export default CancelButton;