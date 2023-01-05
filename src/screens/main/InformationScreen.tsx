import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import PostList from '../../components/information/PostList';
import styles from '../../styles/screens/Information';
import homeStyles from '../../styles/screens/Home';
import titleStyles from '../../styles/home/TitleText';
import LeftPageButton from '../../components/home/LeftPageButton';
import RightPageButton from '../../components/home/RightPageButton';

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
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>

                <View style = {styles.crollingpost}>
                    <View style = {styles.image}>
                        
                    </View>
                    <PostList/>
                </View>
                <View style = {styles.verticleLine}/>
            </View>

            {/* <View style = {homeStyles.page}>
                <LeftPageButton/>
                    <Text style = {titleStyles.pagetext}>
                    1
                    </Text>
                <RightPageButton/>
            </View> */}
        </ScrollView>
    );
}
export default InformationScreen;