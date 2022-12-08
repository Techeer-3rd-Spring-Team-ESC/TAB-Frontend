import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type CommunityScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

const PostButton = () => {
    const navigation = useNavigation<CommunityScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginLeft: Platform.OS == 'ios' ? 110 : 140,
            marginRight: 10,
            padding: 10,
            backgroundColor: 'white'
        }
    });

    return (
        <TouchableOpacity 
            style = {styles.buttonStyle}
            onPress = {() => navigation.navigate('Post')}
        >
            <FontAwesome 
                name = 'pencil' 
                size = {Platform.OS == 'ios' ? 70 : 45} 
                color = '#2BC63B' 
            />
        </TouchableOpacity>
    );
};

export default PostButton;