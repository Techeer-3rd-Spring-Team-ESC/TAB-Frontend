import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

function InformationScreen() {
  const styles = StyleSheet.create({
    container: {
      height: 1000,
      backgroundColor: '#F8F9FA',
    },
    post: {
      marginLeft: 15,
      marginTop: 20,
    },
    pstext: {
      marginTop: 18,
      marginLeft: 6,
      marginRight: 140,
      fontSize: 16,
    },
    hashtag: {
      fontSize: 10,
    },
  });
  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>EBC</Text>
        <Text>정보공유</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          style={styles.post}
          source={require('../../../assets/images/nhn.png')}
        />
        <Text style={styles.pstext}>
          기술로 더 나은 세상을 만들어 가는 사람들과 함께 하는 NHN 기술 콘퍼런스
          11월 24일에 만나요.{'\n'}
          <Text style={styles.hashtag}>#NHN #FORWARD #기술 콘퍼런스</Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          style={styles.post}
          source={require('../../../assets/images/nexters.png')}
        />
        <Text style={styles.pstext}>
          Make Us 디자이너, 개발자와 함께 실무처럼 진행할 수 있는 대규모
          프로젝트 22기 모집중{'\n'}
          <Text style={styles.hashtag}>#NEXTERS #프로젝트</Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          style={styles.post}
          source={require('../../../assets/images/carrot.png')}
        />
        <Text style={styles.pstext}>
          2022 당근마켓{'\n'}WINTERTECH 인턴십 모집중...{'\n'}
          <Text style={styles.hashtag}>
            #당근마켓 #WINTERTECH #인턴십 #개발자{'\n'}
            #모집중 #테크로혁신 #엔지니어 #터닝포인트
          </Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          style={styles.post}
          source={require('../../../assets/images/kakao.png')}
        />
        <Text style={styles.pstext}>
          2023 카카오모빌리티{'\n'}신입 개발자 공채 모집중!!!{'\n'}
          <Text style={styles.hashtag}>
            #카카오 #모빌리티 #카카오모빌리티 #신입 #경력{'\n'}
            #개발공채 #모집중 #많은참여바랍니다.
          </Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          style={styles.post}
          source={require('../../../assets/images/kakaopay.png')}
        />
        <Text style={styles.pstext}>
          2022 카카오페이{'\n'}서버 / FE개발자 대규모 채용중!!!{'\n'}
          <Text style={styles.hashtag}>
            #카카오 #카카오페이 #Kakaopay #서버 #sercer{'\n'}#프론트엔드
            #Frontend #대규모 #채용중
          </Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          style={styles.post}
          source={require('../../../assets/images/ai.png')}
        />
        <Text style={styles.pstext}>
          (강동 1기) 인공지능 서비스 개발자{'\n'} 양성 과정 새싹(SeSAC)
          강동캠퍼스
          {'\n'}
          <Text style={styles.hashtag}>
            #강동1기 #인공지능 #서비스 #개발자 #양성과정{'\n'}#새싹 #SeSAC
            #강동캠퍼스 #모집중
          </Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          style={styles.post}
          source={require('../../../assets/images/apple.png')}
        />
        <Text style={styles.pstext}>
          2023 애플 디벨로퍼 아카데미{'\n'}The Academy Open{'\n'}
          <Text style={styles.hashtag}>
            #2023 #애플 #디벨로퍼 #아카데미 #POSTECH{'\n'}#지원서 #접수기간
            #11월30일까지
          </Text>
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          style={styles.post}
          source={require('../../../assets/images/kt.png')}
        />
        <Text style={styles.pstext}>
          KT 에이블스쿨 3기 모집!{'\n'}기업이 원하는 AI개발자, DX컨설턴트{'\n'}
          <Text style={styles.hashtag}>
            #KT #에이블스쿨 #3기모집 #AI개발자 #AIVLE{'\n'}#DX컨설턴트
            #11월14일부터 #12월5일까지
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default InformationScreen;
