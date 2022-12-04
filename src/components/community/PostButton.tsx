import React from "react";
import {TouchableOpacity, Platform} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type CommunityScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

const PostButton = () => {
    const navigation = useNavigation<CommunityScreenProp>();
    
    return (
        <TouchableOpacity
            style={{ 
            marginTop: Platform.OS == 'ios' ? 240 : 10,
            marginLeft: 130,
            marginRight: 20,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            }}
            onPress={() => navigation.navigate('Post')}
        >
            <FontAwesome name='pencil' size={40} color='#2BC63B' />
        </TouchableOpacity>
    );
};

export default PostButton;