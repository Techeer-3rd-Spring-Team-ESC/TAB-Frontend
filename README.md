## How to run

1. Clone this project
    
    ```
    git clone https://github.com/Techeer3-Spring-Study/TAB-Frontend.git
    ```

2. node module install
    
    ```
   npm install
    ```


3. Android run
    
    ```
    npm run android
    ```
    
4. iOS run
    
    ```
    cd ios
    pod install
    cd ..
    npm run ios
    ```
    

## Directory Structure v1

```
.
├── App.js
├── android/
├── app.json
├── index.js
├── ios/
├── node_modules/
├── package.json
├── assets     // 각종 자원을 모아놓은 폴더
│   ├── images
│   ├── icons
│   └── fonts  **// 여기는 이름 고정이니까 바꾸지마세요**
├── src   // 소스 코드를 모아놓은 폴더
│   ├── screens   // 화면 단위의 코드
│   ├── navigation   // 네비게이션 코드
│   ├── services (or apis)   // 기능 구현을 위한 코드
│   ├── hooks   // react hook 사용을 위한 코드
│   ├── components   // 재사용 가능한 컴포넌트 코드
│   └── styles   // 스타일 코드
├── configs   // 각종 설정을 위한 폴더
└── yarn.lock
```
