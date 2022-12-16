import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles/community/Profile';

function Profile() {
    return (
        <View style = {styles.profileContainer}>
            <Text style = {styles.profileText}>
                loana Mircea
            </Text>
            <Image style = {styles.profileImage}
                source = {require('../../../assets/images/tab.png')}
            />
        </View>
    );
};

export default Profile;