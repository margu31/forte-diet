# 패스트캠퍼스 프론트엔드 개발 스쿨 18기 파이널 프로젝트

우연히, 식단 프로젝트입니다.

<br>
<br>

<!-- ## 🦊 데모
[👉데모페이지 이동]TBU
<br>
<br> -->

## 🦊 팀원

[🙋🏻김효성](https://github.com/hyorard-b)<br>
[🙋🏻‍♀️박혜준](https://github.com/margu31)<br>
[🙋🏻이효형](https://github.com/lhhyung91)<br>
[🙋🏻‍♀️장지혜](https://github.com/jjhstoday)<br>
<br>
<br>

## 🦊 스택

![react](https://img.shields.io/badge/react-17.0.2-brightgreen) ![redux](https://img.shields.io/badge/redux-4.0.5-yellowgreen) ![react-redux](https://img.shields.io/badge/react--redux-7.2.3-yellow) ![react-thunk](https://img.shields.io/badge/react--thunk-2.3.0-red) <br>![router](https://img.shields.io/badge/router-1.3.5-%23a0f48d) ![react-router](https://img.shields.io/badge/react--router-5.2.0-%23f6f990) ![firebase](https://img.shields.io/badge/firebase-8.3.3-blue) ![axios](https://img.shields.io/badge/axios-0.21.1-important) ![styled-components](https://img.shields.io/badge/styled--components-5.2.3-blueviolet) <br>![framer-motion](https://img.shields.io/badge/framer--motion-4.1.3-orange) ![prop-types](https://img.shields.io/badge/prop--types-15.7.2-success) ![eslint](https://img.shields.io/badge/eslint-7.23.0-9cf) ![prettier](https://img.shields.io/badge/prettier-2.2.1-critical) <br>![immer](https://img.shields.io/badge/immer-9.0.1-blueviolet) ![polished](https://img.shields.io/badge/polished-4.1.1-%23f9c2fc) ![react-icons](https://img.shields.io/badge/react--icons-4.2.0-%2392fcfc) ![reselect](https://img.shields.io/badge/reselect-4.0.0-%23f7b08f)
<br>
<br>

## 🦊 프로젝트 소개

### 🍽기획 의도

```
✔️ 현대인의 건강한 식습관을 위한 프로젝트!
✔️ 바쁜 일상 속에 잊고 지내기 쉬운 우리의 소중한 한끼를 꼼꼼히 기록하며, 잘못된 식습관을 찾아 고치자!
✔️ 내 몸이 편한 음식을 찾으며 알아가는 소중한 나!
✔️ 좋은 식단을 서로 나누어요!
```

### 🍽구현 기능

```
✔️ 로그인, 회원가입
✔️ 식단 리스트
    🔸 인기순, 최신순, 검색순으로 정렬 가능
    🔸 하루 단위로 게시물 확인 가능 : 무한 스크롤
    🔸 한끼 당 게시물 확인 가능 : 캐러셀
✔️ 게시물 검색
✔️ 캘린더
    🔸 날짜 클릭 시, 해당 날짜 게시물로 이동
    🔸 달력 내 식단 등록된 날짜 표시
✔️ 식단 포스팅
    🔸 사진, 칼로리, 식사 타입 기록
    🔸 리뷰 작성
    🔸 공개 여부 설정 가능
✔️ 사이드 바
    🔸 최근 3일간의 칼로리 표시
    🔸 물 섭취량 표시
    🔸 하루 권장 영양소 안내
✔️ 튜토리얼
```

### 🍽역할 분배

```
✔️ 김효성 : 환경 구축, 데이터 구조 구성, 메인 페이지, 헤더(네비게이션), 푸터
✔️ 박혜준 : 식단 포스팅, 설정, 튜토리얼
✔️ 이효형 : 로그인, 회원가입, 식단 모달창
✔️ 장지혜 : 식단 리스트, 캘린더, 사이드바
```

<br>
<br>

## 🦊프로젝트 목표

    🍕 git을 통한 팀원간 협업 연습
    ✔️ git Wiki
    ✔️ git Kanban

    ✔️ 6개월간 여정의 종점을 찍는 마지막 프로젝트
    ✔️ 웹 접근성 학습
    ✔️ firebase 활용한 인증 및 CRUD
    ✔️ react, redux를 활용한 상태관리
    ✔️ redux-thunk, async-await를 활용한 비동기 처리
    ✔️ router를 활용한 SPA 제작

<br>
<br>

## 🦊API

###

    ✔️ 인증 - firebase-authentication
    ✔️ DB - firebase-firestore, firebase-storage

<br>
<br>

## 🦊프로젝트 구조도

```md
├── src
│ ├── api
│ ├── app
│ │ └── App.js
│ ├── components
│ │ ├── Button
│ │ │ ├── Button.js
│ │ │ └── Button.styled.js
│ │ ├── SideBar
│ │ │ ├── SideBar.js
│ │ │ └── SideBar.styled.js
│ │ ├── UpperBar
│ │ │ ├── UpperBar.js
│ │ │ └── UpperBar.styled.js
│ │ ├── HomeLink
│ │ │ ├── HomeLink.js
│ │ │ └── HomeLink.styled.js
│ │ ├── NavLink
│ │ │ ├── NavLink.js
│ │ │ └── NavLink.styled.js
│ │ ├── Navigation
│ │ │ ├── Navigation.js
│ │ │ ├── Navigation.styled.js
│ │ │ ├── SideNavigation.js
│ │ │ ├── SideNavigation.styled.js
│ │ │ ├── UpperNavigation.js
│ │ │ └── UpperNavigation.styled.js
│ │ ├── Welcome
│ │ │ ├── Welcome.js
│ │ │ └── Welcome.styled.js
│ │ ├── Search
│ │ │ ├── Search.js
│ │ │ └── Search.styled.js
│ │ ├── Board
│ │ │ ├── Board.js
│ │ │ └── Board.styled.js
│ │ ├── Tab
│ │ │ ├── Tab.js
│ │ │ └── Tab.styled.js
│ │ ├── Footer
│ │ │ ├── Footer.js
│ │ │ └── Footer.styled.js
│ │ ├── Modal # 공용 modal 컴포넌트
│ │ │ ├── Modal.js
│ │ │ └── Modal.styled.js
│ │ ├── Dialog # 공용 dialog 컴포넌트
│ │ │ ├── Dialog.js
│ │ │ └── Dialog.styled.js
│ │ ├── Input # 공용 input 컴포넌트
│ │ │ ├── Input.js
│ │ │ └── Input.styled.js  
│ │ ├── LogIn # LogIn, 공용 컴포넌트 사용
│ │ │ ├── Login.styled.js
│ │ │ └── Login.js
│ │ ├── SignUp # SignUp, 공용 컴포넌트 사용
│ │ │ ├── SignUp.styled.js
│ │ │ └── SignUp.js  
│ │ ├── Posting
│ │ │ ├── PostingForm.js
│ │ │ ├── PostingForm.styled.js
│ │ │ ├── PostingInput.js
│ │ │ ├── PostingInput.styled.js
│ │ │ ├── PostingReviewBox.js
│ │ │ ├── PostingReviewBox.styled.js
│ │ │ ├── PostingInputRadio.js
│ │ │ ├── PostingInputRadio.styled.js
│ │ │ ├── PostingButton.js
│ │ │ └── PostingButton.styled.js
│ │ ├── Setting # 모달
│ │ │ ├── SettingModal.js
│ │ │ └── SettingModal.styled.js
│ │ ├── Tutorial # 로그인 전 - 회원가입 또는 로그인 버튼 / 후 - 포스팅 추가 버튼
│ │ │ ├── Tutorial.js
│ │ │ └── Tutorial.styled.js
│ │ ├── MenuList # ui 구현
│ │ │ ├── MenuList.js # MealList, HealthInfo, Calendar 일자별로 묶는 파일
│ │ │ └── MenuList.styled.js
│ │ ├── MealList # ui 구현
│ │ │ ├── MealList.js
│ │ │ └── MealList.styled.js
│ │ ├── Calendar # ui 구현
│ │ │ ├── Calendar.js
│ │ │ └── Calendar.styled.js
│ │ ├── HealthBar # ui 구현
│ │ │ ├── HealthBar.js # HealthInfo 컴포넌트 재사용 & Like 컴포넌트 재사용
│ │ │ └── HealthBar.styled.js
│ │ ├── HealthInfo # date, calorie, waterDose, nutrient info
│ │ │ └── HealthInfo.js
│ │ ├── Like
│ │ │ ├── Like.js
│ │ │ └── Like.styled.js
│ ├── containers
│ │ ├── WelcomeContainer
│ │ │ └── WelcomeContainer.js
│ │ ├── BoardContainer
│ │ │ └── BoardContainer.js
│ │ ├── LogInContainer
│ │ │ └── LogInContainer.js
│ │ ├── SignUpContainer
│ │ │ └── SignUpContainer.js
│ │ ├── PostingContainer
│ │ │ └── PostingContainer.js
│ │ ├── SettingContainer
│ │ │ └── SettingContainer.js
│ │ ├── TutorialContainer
│ │ │ └── TutorialContainer.js
│ │ ├── MenuListContainer # 기능 구현
│ │ │ └── MenuListContainer.js
│ │ ├── HealthBarContainer # 기능 구현
│ │ │ └── HealthBarContainer.js
│ ├── utils # validation
│ │ ├── validation
│ │ │ ├── LogInValidation.js
│ │ │ ├── SignUpValidation.js
│ │ │ └── reviewValidation.js
│ ├── pages
│ │ ├── Home
│ │ │ ├── Home.js
│ │ │ └── Home.styled.js
│ │ ├── MyPage
│ │ │ ├── MyPage.js
│ │ │ └── MyPage.styled.js
│ │ ├── PostingPage
│ │ │ ├── PostingPage.js
│ │ │ └── PostingPage.styled.js
│ │ ├── TutorialPage
│ │ │ ├── TutorialPage.js
│ │ │ └── TutorialPage.styled.js
│ ├── redux
│ │ ├── modules
│ │ │ ├── board.js
│ │ │ ├── index.js
│ │ │ ├── postingMenuList.js
│ │ │ ├── menuList.js # add, toggle, delete reducer 구현
│ │ │ └── healthBar.js
│ ├── styles
│ │ ├── index.js # color, font, etc...
└───└────└── store.js
```
