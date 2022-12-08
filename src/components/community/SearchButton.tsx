import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type CommunityScreenProp = StackNavigationProp<RootStackParamList, 'Community'>;

const SearchButton = () => {
    const navigation = useNavigation<CommunityScreenProp>();
    const styles = StyleSheet.create({
        buttonStyle: {
            marginTop: 10,
            marginLeft: 20,
            marginBottom: 10,
            padding: 10,
            backgroundColor: '#2BC63B',
            borderRadius: 8
        }
    });

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
};

export default SearchButton;