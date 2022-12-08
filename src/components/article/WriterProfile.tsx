import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../styles/article/WriterProfile';

class WriterProfile extends Component{
    render() {
        return (
            <View style = {styles.profileContainer}>
                <Image style = {styles.profileImage}
                    source = {require('../../../assets/images/tab.png')}
                />
                <Text style = {styles.profileText}>
                    <Text style = {styles.profilename}>
                        loana Mircea{'\n'}
                    </Text>
                    <Text style = {styles.profileMessage}>
                        Aug 29. 6 min read. Member-only
                    </Text>
                </Text>
            </View>
        )
    };
};

export default WriterProfile;