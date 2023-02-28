import React from 'react';
import {View, Text,  Image} from 'react-native';
import styles from '../../styles/article/ArticleImage';

function ArticleImage() {
    return (
        <View style = {styles.titleContainer}>
            <Image style = {styles.image}
                resizeMode = "contain"
                source = {require("../../../assets/images/mainImage.png")}
            />
        </View>
    );
};

export default ArticleImage;