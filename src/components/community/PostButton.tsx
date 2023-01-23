import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/community/PostButton';

type CommunityScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

function PostButton() {
    const navigation = useNavigation<CommunityScreenProp>();
    return (
        <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress = {() => navigation.navigate('Post')}
        >
            <FontAwesome 
                name = 'pencil' 
                size = {Platform.OS == 'ios' ? 60 : 45} 
                color = '#51b05b'
            />
        </TouchableOpacity>
    );
};

export default PostButton;