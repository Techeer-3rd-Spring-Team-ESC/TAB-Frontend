import React, {Component} from 'react';
import {View, Text,  Image} from 'react-native';
import styles from '../../styles/article/ArticleImage';

class ArticleImage extends Component {
    render() {
        return (
            <View style = {styles.titleContainer}>
                <Image style = {styles.image}
                    resizeMode = "contain"
                    source = {require("../../../assets/images/mainImage.png")}
                />
                <Text style = {styles.imageSubtitle}>
                    Photo by Rubaitul Azad on Unsplash
                </Text>
            </View>
        )
    };
};

export default ArticleImage;