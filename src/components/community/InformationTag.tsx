import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../../styles/community/InformationTag';

class InformationTag extends Component{
    render() {
        return (
            <TouchableOpacity style = {styles.tagStyle}>
                <Text style = {styles.tagTitle}>
                    정보
                </Text>
            </TouchableOpacity>
        )
    };
};

export default InformationTag;