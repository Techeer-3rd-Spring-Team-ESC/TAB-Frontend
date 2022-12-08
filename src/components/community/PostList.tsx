import React from 'react';
import {TouchableOpacity, StyleSheet, Platform, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

const PostList = () => {
    const navigation = useNavigation<SignUpScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            backgroundColor: 'white',
            borderRadius: 8
        },

        listTitle: {
            width: '90%', 
            marginTop: Platform.OS == 'ios' ? 20 : 10,
            marginLeft: 20,
            color: 'black', 
            fontSize: Platform.OS == 'ios' ? 15 : 10,
            fontFamily: 'GmarketSansTTFMedium',
            lineHeight: Platform.OS == 'ios' ? 20 : 15
        }
        
    });

    return (
        <TouchableOpacity
            style = {styles.buttonStyle}
            onPress = {() => navigation.navigate('Article')}
        >
            <Text
                style = {styles.listTitle}
                numberOfLines={2} 
            >
                A Step-by-Step Guid -- Are you looking for a new, creative project? 
                What about building your own Telegram bot in Python? 
                Sounds fun
            </Text>
        </TouchableOpacity>
        
    );
};

export default PostList;