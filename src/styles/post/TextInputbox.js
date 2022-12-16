import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create ({
    inputStyle: {
        height: Platform.OS == "ios" ? 370 : 230,
        marginTop: Platform.OS == "ios" ? 10 : 10,
        padding: 8,
        backgroundColor: 'white',
        borderColor: 'white', 
        borderRadius: 8,
        textAlignVertical: "top" // 안드로이드 텍스트 상단정렬
    }
});

export default styles;