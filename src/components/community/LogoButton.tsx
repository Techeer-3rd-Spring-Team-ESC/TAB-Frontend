import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import homeStyles from '../../styles/screens/Home';

type BookmarkScreenProp = StackNavigationProp<RootStackParamList, 'Bookmark'>;

function LogoButton() {
    const navigation = useNavigation<BookmarkScreenProp>();
    return (
        <TouchableOpacity>
            <Image 
                style = {homeStyles.image}
                source = {require('../../../assets/images/tab.png')}
            />
        </TouchableOpacity>
    );
};


export default LogoButton;