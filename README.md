# 내가 보려고 만든 리액트 요약본
## 리액트 설치 & 개발환경 셋팅
### 리액트 설치
- node.js LTS 버전 설치
- 코드 에디터 설치(ex. Visual Studio, Brakets)
- 프로젝트 설치 명령어

    `npx create-react-app 프로젝트명`
-  프로젝트 시작 명령어

    `npm start`

## 부트스트랩 적용 ( 리액트용 )
### 부트 스트랩 설치
- react boothstrap 사이트 방문
- 설치 명령어

    `npm install react-bootstrap bootstrap`
- index.html에 css용 cdn 삽입

    ```
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
    />
    ```
- App.js에서 필요한 태그 import 등록해서 사용 하면 됨.
  
  `import {Button} from 'react-bootstrap'`

- className 부여해서 Css커스터마이징도 가능

## 리액트 라우터
### 라우터 셋팅
- 외부 라이브러리 설치 셋팅
  - react-router-dom 홈페이지 방문
  - 터미널 설치문 입력

    `npm install react-router-dom@6`
  - 설치 후 셋팅 index.js
    - import로 BrowserRouter 불러오기

      ```
        import { BrowserRouter } from "react-router-dom";

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
          <React.StrictMode>
              <BrowserRouter>
                <App />
              </BrowserRouter>
          </React.StrictMode>
        );         
      ```
    - <BrowserRouter> 로 <App/> 이걸 감싸면 끝

### 라우터로 페이지네이션
- 라우터로 페이지 나눌라면
  - App.js에서 Routes, Route, Link 불러오기

    `import { Routes, Route, Link } from 'react-router-dom'`
  - return() 안에 라우터 영역인 <Routes> 만들고 그 안에 개별적인<Route> 작성
  - <Route path="/url경로" element={ <보여줄html or component> } /> 작성
  
### 페이지 이동버튼
- url 입력 않고 링크 타고 들어가려면
  - react-router-dom에서 Link 컴포넌트 import 해오기
  - 원하는 곳에서 Link 태그 사용
  - 예시
  
    `<Link to="/">홈</Link>`
    `<Link to="/다른 라우터명">상세페이지</>`


### Navigate
- 페이지 이동기능을 구현하고 싶을 시 
  - useNavigate() 메서드 사용
  - Link도 사용가능 하지만 별로일 시 useNavigate 사용 가능
  - 예시

    ```
      function App(){
        let navigate = useNavigate()
        
        return (
          (생략)
          <button onClick={()=>{ navigate('/detail') }}>이동버튼</button>
        )
      }
    ```
  - navigate() 파라미터에 따른 다른 결과
    - -1일 경우 뒤로 1번 가기
    - 2넣으면 앞으로 2번 가기
- 404 페이지 전용 만들고 싶을 시
  - <Route path="*">로 하나 구현 하면 완료

### nested routes, Outlet
- 서브경로 제작 시 
  - nested routes
  - 예시
    - /about/member or /about/location 구현하고 싶을시

      <Route path="/about" element={ <About/> } >  
        <Route path="member" element={ <div>멤버들</div> } />
        <Route path="location" element={ <div>회사위치</div> } />
      </Route>
  - 부모 안의 route 값을 보여주고 싶을 시
    - 부모 html에 <Outlet></Outlet> 태그를 추가해야한다.

### URL 파라미터로 상세페이지 만들기
- URL 파라미터 문법 사용
  - path 작명시 /:작명 사용 사
    - 아무 문자나 사용가능
  - 예시

    `<Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>`
- useParam 
  - 컴포넌트에서 url 파라미터에 입력된 숫자 사용하고 싶을 시
  - 해당 컴포넌트에서 useParams import 해서 사용
    
    ```
      import { useParams } from 'react-router-dom'

      function Detail(){
        let {id} = useParams();
        console.log(id)
        
        return (
          <div>
            <h4 className="pt-5">{props.shoes[id].title}</h4>
          </div>
        )
      }
    ```

## 변수 꼳아 넣는 법
### 일반 변수 
- return 바깥에 변수 선언
  - 예시 

    `let 변수입니당 = "니가 뭘할 수 있는데";`
- 변수 사용 시
  - 예시 
  
    `<div>여기에 뭐가 있든 { 변수입니당 }</div>`
### 중요한 변수
- useState 사용
  - 사용법
    - 우선 useState를 import 해온다

        `import { useState } from 'react';`
    - 변수에 배열 상태로 작성 하고 우항엔 useState메서드 사용
  
        `let [변수, 변수변경함수] = useState(값 or 배열);`
  - 사용 이유
    - 변동 사항 발생 시 자동 재렌더링 시켜줌
- state 변경하는 법
  - useState 선언하면서 변수 옆에 변수변경함수 사용
  - 변수변경함수(새로운값)
- 배열 들어간 state 변경 하는 법

    ```
    let copy = [...글제목];
    copy[0] = '바뀔 값';
    변수변경함수(copy);
    ```
## src에 안에 있는 이미지 파일 사용 시
### src에 있는 이미지
- 이미지 사용 시
  - 상단에서 import 로 불러 와야함
  
    `import 별칭 from './이미지.png'`
### src내부의 디렉터리 이미지 파일 사용 시
- 이미지 사용 시
  - 상단에서 import 로 불러 와야함
  
    `import 별칭 from './~디렉터리~/이미지.png'`

## public 폴더에 있는 이미지 사용할 땐
### public 폴더에 있는 이미지
- 이미지 사용시
  - 그냥 /이미지경로 사용하면 됨
  - public 폴더에 밀어넣으면 import 100번 안해도 되니 편리합
  
    `<img src="/logo192.png" /> `
- 권장되는 방식
  - 리액트로 만든 html 페이지를 배포할 때
  - codingapple.com 경로에 배포하면 아무런 문제가 없지만
  - codingapple.com/어쩌구/ 경로에 배포하면
  - /logo192.png 이렇게 쓰면 파일을 찾을 수 없다고 나올 수도 있음
  
    `<img src={process.env.PUBLIC_URL + '/logo192.png'} /> `

## html 태그에 style 속성 집어 넣으려면
- 태그안에 style 속성에 변수 넣듯이
  - 예시 : {속성명 : '속성값'}
    `<div style={{color : 'blue', fontSize : '30px'}}>` 

## 터미널 warning 무시
- 주석
    
    `/*eslint-disable*/`

## 클릭 시 이벤트 동작
- 사용법
  - 태그 안에 onClick 속성 추가
  - 예시

    `<div onClick={실행할 함수}>`

    `<div onClick={()=>{ 실행할 코드}}></div>`

## 배열 함수
- 이름순 정렬
  - 사용

    `배열.sort();`
- 반복문
  - 사용

    ```
    배열.map(function(배열값, 인덱스){
        return (
            <div></div>
        )
    })
    ```
  - (참고) map 반복문으로 반복생성한 html엔 key={i} 이런 속성을 추가해야함
- 배열 값 추가
  - push
    - 배열의 맨 뒤에 추가 해주는 메서드
    - 배열.push(추가할 값)
  - unshift
    - 배열의 맨 앞에 추가 해주는 메서드
    - 배열.unshift(추가할 값)
- 배열 값 삭제
  - splice
    - 배열의
  - 배열.splice(시작할 인덱스,삭제할 갯수)

## 컴포넌트 문법
- 컴포넌트란?
  - 긴 div 함축 때린거
- 컴포넌트 관습
  - 작명 시 첫번째 글자는 영어대문자
- 컴포넌트 생성
  - 예시1
  
    ```
    function Component(){
        return (<div></div>)
    }
    ```
  - 예시2
  
    ```
    let Component = () => {
        return (<div></div>)
    }
    ``` 

## export / depault 문법
- 컴포넌트나 데이터를 다른 파일에 보관해서 불러오고 싶을 시
  - App.js에서 읽고 싶은 파일에서
  
    `export default (읽게 해줄 변수명);`
  - App.js에서 

    `import (App.js에서 쓸 이름) from './파일명'`

- 유의점
  - 변수, 함수, 자료형 전부 export 가능
  - 파일마다 export default 라는 키워드는 하나만 사용가능
  - 파일경로는 ./ 부터 시작해야함

- 여러개의 변수들을 내보내고싶으면 export default 말고 이런 문법을 씀
  ```
  보낼 파일
  var name1 = 'Kim';
  var name2 = 'Park';
  export { name1, name2 }
  ```
  ```
  받을 파일
  import { name1, name2 } from './data.js';
  ```
- 유의점
  - export { } 했던 것들은 import { } 쓸 때 자유작명이 불가능
  - export 했던 변수명 그대로 적어야함 
## JSX에서 조건문 쓰는 법
- 삼항 연산자
  - 사용법  
  
    `조건식  ? 참일 때 실행할 코드 : 거짓일때 실행할 코드`

## App.js에 있는 state값 자식 컴포넌트로 값 보내기
- 자식 컴포넌트로 state값을 보내려면

  `<태그 state명={state값}/>`
- 자식 컴포넌트에서 받으려면 props 사용

  ```
    function Card(props){
      return (
        <div className="col-md-4">
          <h4>{ props.state작명[0].속성 }</h4>
          <p>{ props.state작명[0].속성 }</p>
        </div>
      )
    }
  ```
- 배열 state 보내려면

  `<태그 state={state값[인덱스]}/>`

## Context API (props 대신 사용가능)
### Context API - props없이 state 공유 가능
- Context API 사용 단계
  - createContext() 함수로 context 1개 생성
    - context란 state 보관함과 같음
  - 만든 context로 원하는 곳을 감싸기
    - 공유를 원하는 state를 value안에 다 입력하면 됨.
  - 이후 context로 감싼 모든 컴포넌트와 자식 컴포넌트는 
    - state를 props 전송없이 직접 사용가능
- 예시
  ```
    (App.js)

    export let context1 = React.createContext();

    function App(){
      let [재고, 재고변경] = useState([10,11,12]);

      return (
        <Context1.Provider value={ {재고, shoes} }>
          <Detail shoes={shoes}/>
        </Context1.Provider>
        
      )
    }
  ```

### Context 안에 있던 state 사용 시
- 만들어둔 Context를 import 해오기
- useContext()안에 삽입
- 예시
  ```
    (Detail.js)

    import {useState, useEffect, useContext} from 'react';
    import {Context1} from './../App.js';

    function Detail(){
      let {재고} = useContext(Context1)

      return (
        <div>{재고}</div>
      )
    }
  ```
- 컴포넌트에서 Context에 있던 state를 꺼내 쓰려면
  - Context을 import 하고
  - context를 해체해주는 함수인 useContext 안에 삽입 해두면 
  - 그 공간에 공유했던 모든 state가 남으
  - 변수에 담아서 사용하면 됨

### Context API의 장단점
- 장점
  - 중첩해서 사용하는 컴포넌트가 많을 때 편리함
- 단점
  - state 변경 시 쓸데없는 컴포넌트까지 전부 재렌더링 됨
  - useContext()를 쓰고 있는 컴포넌트는 나중에 재사용시 Context를 import 하는게 귀찮음
    - 위의 이유로 redux 같은 외부 라이브러리 주로 사용

## Redux 
### Redux 란?
- props 없이 state를 공유할 수 있게 해주는 라이브러리
- Redux 설치 시 Js파일 하나에 state들 보관 가능
  - 해당 state를 모든 컴포넌트가 직접 사용 가능
  - 컴포넌트가 많아질 수록 사용하기 좋음

### Redux 설치법
- Redux tookit 설치
  - 명령어 (터미널)

    `npm install @reduxjs/toolkit react-redux`
  - 설치 전 확인 사항
    - react, react-dom 항목 버전이 18.1.x 이상만 사용 가능

### Redux 셋팅
- state 보관하는 파일 생성
  - 아무데나 store.js 파일 생성 후 아래 코드 복붙
  ```
    import { configureStore } from '@reduxjs/toolkit'

    export default configureStore({
      reducer: { }
    }) 
  ```
- index.js에서 Provider 라는 Component와 방금 작성한 파일 import 하기
  - 밑에 <Provider store={import해온것}> 이걸로 <App/> 감싸기
  - 이제 <App>과 그 모든 자식 컴포넌트들은 store.js에 있던 state를 자유롭게 사용 가능
  - 예시
  
    ```
      import { Provider } from "react-redux";
      import store from './store.js'  

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
          <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Provider>
        </React.StrictMode>
      ); 
    ```
### Redux store에 state 보관하는 방법
- Redux store에서 state 생성
  - createSlice()로 state 1개 생성
    - createSlice() == useState() 용도 비슷
  - configureStore() 안에 등록 
    - configureStore()에 등록한 state는 모든 컴포넌트에서 자유롭게 사용 가능
  - createSlice()와 configureStore()는 import 해오기
- 예시

  ```
    import { configureStore, createSlice } from '@reduxjs/toolkit'

    let user = createSlice({
      name : 'user',
      initialState : 'kim'
    })

    export default configureStore({
      reducer: {
        user : user.reducer
      }
    }) 
  ```
### Redux store에 있던 state 가져다 쓰는 방법
- 아무 컴포넌트에서 useSelector((state) => {return state}) 사용
  - store에 있던 모든 state 해당 공간에 남음
  - 변수에 저장해서 출력 가능
  - 다른 방법 : let a = useSelector((state) => state.user ) 

### Redux store의 state 변경하는 방법
- 변경하는 방법
  - store.js에 state 변경해주는 함수 생성
    - 예시
      - 파라미터 하나 작명하면 기존 state가 됨.
      - return 우측에 새로운 state 입력하면 그걸로 기존 state를 갈아치워줌. 
      ```
        let user = createSlice({
          name : 'user',
          initialState : 'kim',
          reducers : {
            함수작명(state){
              return 'john ' + state
            }
          }
        }) 
      ```
  - 해당 함수 export 처리
    - 예시
    
      `export let { changeName } = user.actions`
  - 필요 시 import 해서 사용하면 되지만 dispatch()로 감싸서 사용
  - store.js에서 원하는 state변경함수 가져오면 됨
  - useDispatch 라는 것도 라이브러리에서 가져와야함
  - 그리고 dispatch( state변경함수() ) 이렇게 감싸서 실행하면 state 진짜로 변경됨 










## 리액트에서 동적인 UI 만드는 step 간단 정리
- html css로 미리 UI 디자인을 완성
- UI의 현재 상태를 state로 저장
- state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성

## input 현재 상태 다루기 (핸들링)
### input에 뭔가 입력시 코드를 실행
- onChange & onInput 이벤트 핸들러 부착
- 예시

    `<input onChange={()=>{ 실행할 코드 }}/>` 
- input에 유저가 뭔가 입력할 때마다 안에 있는 코드를 실행해줌

### input에 입력한 값 가져오는 법
- 화살표 함수 안에 e 파라미터를 추가
- 실행할 코드 안에는 e.target.value를 적으면
    
    -> input 태그에 입력된 값 불러오기 가능
- 이벤트 핸들러에 들어가는 함수에 파라미터 e를 추가하면

    -> e를 이벤트 객체라고 부름
    
    ->현재 발생하는 이벤트와 관련한 유용한 기능들을 제공하는 일종의 변수

    -> 작명은 e 말고도 자유롭게 가능
- e.target : 현재 이벤트가 발생한 지점 알려줌
- e.preventDefault() : 이벤트 기본 동작 방지
- e.stopPropagation() : 이벤트 버블링 방지

### 사용자가 input에 입력한 데이터 저장
- input 태그에 입력되고 있는 값 저장할 state 하나 생성

    `let [nowValue, setValue] = useState('');`
    
    ```
    <input onChange={(e)=>{setValue(e.target.value)}} />
    ```
- 추후 nowValue 값 state를 필요한 곳에서 사용하면 됨

## Styled-Components 문법
### 설치 및 세팅
- 설치
  - 터미널에서 설치 명령어 입력
  
    `npm install styled-components`
- 세팅
  - 사용하고 싶은 컴포넌트 맨위에 import  

    `import styled from 'styled-components'`
### 기본 적인 사용법
- Styled-Components 사용법
  - 컴포넌트를 만들 때 스타일을 미리 주입해서 제작 가능
  - 특별한 div 를 하나 만들고 싶을 때
    - let 작명 = styled.div 식으로 입력
    - 입력 후  백틱안에`` css 값 입력
  - 예시

    ```
      import styled from 'styled-components';

      let Box = styled.div`
        padding : 20px;
        color : grey
      `;
      let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
      `;

      function Detail(){
        return (
          <div>
            <Box>
              <YellowBtn>버튼임</YellowBtn>
            </Box>
          </div>
        )
      }
    ```
- Styled-Component의 장점
  - Css 파일 오픈 없이 Js 파일에서 바로 스타일 주입 가능
  - 다른 Js 파일로 오염되지 않음
    - 원래 Css 파일은 오염되는 구조
  - 페이지 로딩 시간 단축
- Styled-Component의 단점
  - Js 파일 매우 복잡해짐
  - Js 파일간 중복 디자인 많아질 우려
  - Css 담당 디자이너와의 협업 불편 
- Styled-Component에서 props 재활용 가능
  - 예시
  
    ```
      import styled from 'styled-components';

      let YellowBtn = styled.button`
        background : ${ props => props.bg };
        color : black;
        padding : 10px;
      `;

      function Detail(){
        return (
          <div>
              <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
              <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
          </div>
        )
      }
    ```

## Component의 LifeCycle(생명주기)
- Mount
  - 컴포넌트가 생성될 시
- Updat
  - 컴포넌트가 재렌더링될 시
- Unmount
  - 컴포넌트가 삭제될 시

## Component의 LifeCycle에 간섭하는 방법 - LifClcle Hook
- 옛날 Component class문법에서의 방법
  
  ```
    class Detail2 extends React.Component {
      componentDidMount(){
        //Detail2 컴포넌트가 로드되고나서 실행할 코드
      }
      componentDidUpdate(){
        //Detail2 컴포넌트가 업데이트 되고나서 실행할 코드
      }
      componentWillUnmount(){
        //Detail2 컴포넌트가 삭제되기전에 실행할 코드
      }
    }
  ```

- 요즘 사용하는 useEffect 사용
  - 상단에서 useEffect import 사용
  - 콜백함수 추가하여 안에 코드 입력
  - 입력 후 엔 컴포넌트가 mount & update 시 코드 실행
  ```
    import {useState, useEffect} from 'react';

    function Detail(){

      useEffect(()=>{
        //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
        console.log('안녕')
      });
      
      return (생략)
    }
  ```
  - 조금이라도 html 렌더링이 빠른 사이트 제작 시 유용
  - 쓸데없는 것들은 useEffect에 담으면 됨
  - 오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머 적용 많이 적음
## useEffect에 넣을 수 있는 실행조건 
-  useEffect()의 둘째 파라미터로 [ ] 입력 가능
-  []안에는 변수나 state 입력가능
-  변수나 state 변할 때마다 useEffect안의 코드 실행
-  예시
  `useEffect(()->{ 실행할 코드 }, [변수 or state])`

- 아무것도 안넣을 시 컴포넌트 mount 시 1회 실행후 실행 없음.
- useEffect 동작전 특정 코드 실행하고 싶을 시
  - return()=>{ 실행코드 }로 입력 가능

## 서버와 통신 방법 1 - Ajax
- Ajax 란?
  - 서버에 GET, POST 요청을 할 때 새로고침 없이 
  - 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능
- Ajax로 GET/POST 요청 방법 3가지
  - XMLHttpRequest라는 옛날 문법 쓰기
  - fetch() 라는 최신 문법
  - axios같은 외부 라이브러리 (가장 편함)
- axios 사용법
  - 설치
    - 터미널 열고 명령어 입력
  
      `npm install axios`
- Ajax 요청하는 법 (예시: 버튼)
  - axios 쓰려면 상단에서 import 해오기
  - axios.get(URL) 입력 후 해당 URL로 GET 요청 실행
  - 데이터 가져온 결과는 then()파라미터 안의 작명의 작명.data에 들어가 있음
    - 예시

      ```
        import axios from 'axios'

        function App(){
          return (
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
                console.log(결과.data)
              })
              .catch(()=>{
                console.log('실패함')
              })
            }}>버튼</button>
          )
        }
      ```
  - 인터넷이 안되거나 URL이 이상하여 실패할 시 실행할 코드는 .catch()안에 입력

## 서버와 통신 방법 2 - post, fetch
- POST 요청하는 법
  - axios.post('URL', {보낼 컬럼명: '데이터 값'})
    - 실행 시 서버로 자료 전송됨
    - 완료 시 특정 코드를 실행하고 싶을 시 .then()뒤에 붙이면 됨.
- 동시에 AJAX 여러 개 요청하는 법
  - Promise.all( [axios.get('URL1'), axios.get('URL2')] )
    - 실행시 URL1, URL2로 get요청 동시에 실행
- 서버와는 문자자료만 주고받기 가능
  - object / array 자료형은 불가
  - JSON 형태로 자유롭게 발신/수신 가능
- 결과.data 할 시에는 axios 라이브러리에서 자동 변환작업 실행 
  - JSON -> object/array 자동 변환 실행
- fetch() 요청하는 법 
  - 예시
    `fetch('URL').then(결과 => 결과.json()).then((결과) => { console.log(결과) } )`
  - fetch()는 JSON -> object/array 자동 변환이 불가라 직접 수행해줘야 함
- 간혹 Ajax로 받은 데이터html에 사용 시 오류 발생
  - Ajax 요청 속도보다 HTML 렌더링 속도가 더 빨라서 간혹 발생
  - 이럴 시 if 문으로 조절















## 깃 허브에 배포 시 (프론트엔드만)
### 빌드 파일 생성
- 깃허브 올릴 용임
- 빌드 파일 생성 명령어

    `npm run build`
### 깃허브 리포지토리 생성
- 리포지토리 작명
  - 내ID.github.io로 생성
  - public으로 설정
  - Initialize this repository with README 체크
- 리포지토리 파일 업로드
  - 아까 빌드 파일만 올리면 됌

###### -------------------------------------------------------------------------------------------------



## 클래스를 이용한 옛날 옛적 컴포넌트 문법
### 컴포넌트 클래스 생성
- 생성법
    ```
    class 컴포넌트명 extends React.Component {
        constructor(){
            super()
        }

        render(){
            return(
                <div></div>
            )
        }
    }
    ```

### 클래스 컴포넌트에서 state 생성
- state 생성법
    ```
    class 컴포넌트명 extends React.Component {
        constructor(){
            super();
            this.state = {
                속성1 : '문자열',
                속성2 : 숫자
            }
        }

        render(){
            return(
                <div>{this.state.속성1}</div>
            )
        }
    }    
    ```


### 클래스 컴포넌트에서 state 변경
- state 변경법
    ```
    class 컴포넌트명 extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                속성1 : '문자열',
                속성2 : 숫자
            }
        }

        render(){
            return(
                <div>{this.state.속성1}
                    <button onClick={()=>{this.setState({속성2: 25})}}></button>
                </div>
            )
        }
    }    
    ```

### 클래스 컴포넌트에서 props 이용
- props 이용법
    ```
    class 컴포넌트명 extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                속성1 : '문자열',
                속성2 : 숫자
            }
        }

        render(){
            return(
                <div>{this.state.props이름}</div>
            )
        }
    }    
    ```









2파트 4강부터 시작ㄱㄱ

