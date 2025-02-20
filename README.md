# Sight by Sight - Frotend
- Frontend : React
- Backend 관련 정보는 [여기](https://github.com/JeongIn37/SightBySight)에서 확인해주세요.

## Sight by Sight 소개
Sight by Sight는 영화관 시야 후기를 남길 수 있는 사이트입니다.

## 홈 화면

사이트에 접속하면 홈 화면이 보여집니다.


영화관 시야 후기를 적는 사이트의 테마에 맞춰 마우스를 사이트 이름 위에 마우스를 올리면 조명 느낌이 나도록 마우스 포인터에 효과를 주었습니다.


메인 화면에는 로그인 버튼과 회원가입 버튼이 있으며, 처음 사이트를 사용하는 경우 회원가입 버튼을 눌러 회원가입을 할 수 있습니다. 이미 가입한 사용자는 아이디와 비밀번호를 입력하고 사이트에 로그인 할 수 있습니다.

|메인화면-기본|로그인 화면|
|:-:|:-:|
|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_194703389.png)|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_194645044.png)|

## 회원가입
메인 화면에서 SignUp(회원가입)을 누르면 회원가입 창으로 이동합니다.


회원가입 시 사이트에서 사용할 아이디, 비밀번호, 닉네임을 입력합니다. 비밀번호 지정은 두 번 입력하게 하여 비밀번호 확인 과정을 거치며, 회원가입이 완료되면 회원가입 완료를 알리는 alert 창을 띄운 후 사이트 홈 화면으로 이동하게 되고 가입한 아이디와 비밀번호로 로그인을 할 수 있습니다.

|회원가입 화면|회원가입 완료|
|:-:|:-:|
|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_194829034.png)|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_194901770.png)|

## 메인화면
로그인에 성공하면 영화관과 자리를 선택할 수 있는 메인 화면이 보입니다.


메인 화면에는 선택할 수 있는 영화관 목록을 Swiper로 확인할 수 있습니다. 각 영화관을 선택하면 스크롤이 영화관 좌석을 선택할 수 있는 화면 위치로 이동하게 됩니다. 해당 영화관의 좌석 사인이 있으며, 사진 아래의 Dropdown을 이용하여 좌석의 행, 열을 선택할 수 있습니다.



좌석 선택 Dropdown 옆에 "후기쓰기"와 "후기보기" 버튼이 있습니다. 후기쓰기 버튼 클릭 시 선택한 좌석에 대한 후기를 작성할 수 있는 화면으로 넘어갑니다. 후기보기 버튼 클릭 시 선택한 좌석의 후기 목록을 볼 수 있는 화면으로 이동할 수 있도록 구현했습니다.

|영화관 선택|좌석 선택|
|:-:|:-:|
|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_194943370.png)|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_195001235.png)|

## 후기쓰기
메인 화면에서 좌석 선택 후 후기쓰기 버튼 클릭 시 후기를 작성할 수 있는 화면으로 이동합니다.


후기쓰기 화면의 우측상단에 이전 화면에서 선택한 영화관과 좌석 정보가 보이며, 후기 제목과 내용을 입력할 수 있는 영역이 보여집니다. 제목과 내용을 입력한 후 화면 하단의 "등록" 버튼을 클릭하면 새 후기를 해당 영화관 좌석에 등록할 수 있습니다. 성공적으로 후기가 등록되면 다시 메인 화면으로 돌아오게 됩니다.

|후기쓰기 화면|
|:-:|
|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_195113454.png)|

## 후기 보기
메인 화면에서 좌석 선택 후 후기보기 버튼 클릭 시 해당 좌석의 후기 목록을 볼 수 있는 화면으로 이동합니다.


이전 화면에서 선택한 영화관과 좌석 정보가 상단에 보이며 그 아래에 Card의 형태로 작성 된 후기들의 제목이 보여집니다. 각 후기를 클릭할 수 있으며, 후기를 클릭하면 후기 상세 정보를 볼 수 있습니다. 후기 상세 정보 화면이 우측 상단에서 해당 후기의 영화관과 좌석 정보를 확인할 수 있으며 후기의 내용을 확인할 수 있습니다.

|후기 리스트|후기 상세정보|
|:-:|:-:|
|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_195140919.png)|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_195433074.png)|

## 상단 Header 및 마이페이지
홈 화면을 제외한 모든 화면의 상단에 Header가 위치합니다. Header 중앙의 사이트 이름을 클릭하면 메인화면으로 이동이 가능합니다. Header 우측에는 MY PAGE와 LOGOUT 버튼이 있고, MY PAGE버튼 클릭 시 나의 아이디와 닉네임, 작성한 후기 리스트를 볼 수 있는 화면으로 이동합니다. LOGOUT 버튼 클릭 시 로그아웃이 되며 다시 로그인을 할 수 있는 홈 화면으로 이동하게 됩니다.
|Header|
|:-:|
|![](https://github.com/MIN60/madcamp_week3/blob/master/screenshot/KakaoTalk_20220118_195434798.png)|


## Credit
- 김민정([MIN60](https://github.com/MIN60))
- 윤정인([JeongIn37](https://github.com/JeongIn37))
- 조민서([jjminsuh](https://github.com/jjminsuh))
