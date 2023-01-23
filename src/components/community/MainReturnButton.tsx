import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/screens/Community'

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Bookmark'>;

function MainReturnButton() {
    const navigation = useNavigation<BookmarkScreenProp>();
    return (
        <TouchableOpacity 
            onPress = {() => navigation.navigate('Main')}
            style={styles.homeButton}
        >
            <Text style={styles.buttonText}>
                메인으로
            </Text> 
            {/* <FontAwesome 
                name = 'home'
                size = {50} 
                color = 'gray'
            /> */}
        </TouchableOpacity>
    );
};


export default MainReturnButton;