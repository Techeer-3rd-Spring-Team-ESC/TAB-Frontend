import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import PostList from '../../components/information/PostList';
import styles from '../../styles/screens/Information';
import titleStyles from '../../styles/home/TitleText';

function InformationScreen() {
    return (
        <ScrollView 
        style = {styles.container} 
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={true}
        >
            <Text style = {titleStyles.infotext}>
                정보 공유
            </Text> 

            <View style = {styles.listcontainer}>
                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <Image style = {styles.image}
                        source = {require('../../../assets/images/tab.png')}
                    />
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>
            </View>
        </ScrollView>
    );
}
export default InformationScreen;