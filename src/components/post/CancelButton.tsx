import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/post/CancelButton';

type PostScreenProp = StackNavigationProp<RootStackParamList, 'Post'>;

class CancelButton extends Component {
    render () {
        const navigation = useNavigation<PostScreenProp>();
        return (
            <TouchableOpacity
                style = {styles.buttonStyle}
                onPress = {() => navigation.navigate('Main')}
            >
                <Text style = {styles.buttonTitle}>
                    취소
                </Text>
            </TouchableOpacity>
        );
    };
};

export default CancelButton;