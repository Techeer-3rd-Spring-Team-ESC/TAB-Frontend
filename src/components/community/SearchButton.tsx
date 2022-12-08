import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';
import styles from '../../styles/community/SearchButton';

type CommunityScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

class SearchButton extends Component {
    render(){
        const navigation = useNavigation<CommunityScreenProp>();
        return (
            <TouchableOpacity
                style = {styles.buttonStyle}
                onPress = {() => navigation.navigate('Search')}
            >
                <FontAwesome 
                    name = 'search' 
                    size = {20} 
                    color = '#fff'
                />
            </TouchableOpacity>
        );
    }
};

export default SearchButton;