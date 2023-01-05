import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import bookmarkStyles from '../../styles/screens/Bookmark';

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Bookmark'>;

function LogoButton() {
    const navigation = useNavigation<BookmarkScreenProp>();
    return (
        <TouchableOpacity 
            onPress = {() => navigation.navigate('Main')}
        >
            <Image 
                style = {bookmarkStyles.returnbutton}
                source = {require('../../../assets/images/tab.png')}
            />
        </TouchableOpacity>
    );
};


export default LogoButton;