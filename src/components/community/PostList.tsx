import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/community/PostList';

type SignUpScreenProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

class PostList extends Component {
    render(){
        const navigation = useNavigation<SignUpScreenProp>();
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
            
        )
    };
};

export default PostList;