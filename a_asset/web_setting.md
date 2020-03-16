# 웹 세팅하기

1. git-scm.com => git bash

2. node.js => node.js

3. sublimetext.com => edit

4. browser (크롬, 파이어폭스,오페라,비발디, 크로미움엣지, 웨일 ....)

---

## git setting

---

##  node.js

버전확인:

``` shell
$ node -v && npm -v
```

[browser-sync 설치](http://browsersync.io)

``` shell
$ npm i -g browser-sync
$ browser-sync --version
```

---

## edit (sublime text)

1. 컴퓨터 시스템에 경로 지정하기
2. 팩키지컨트롤 설치

---

### 경로 지정하는 방법

1. `내pc`에서 마우스 오른버튼 클릭후 속성을 선택 하여 시스템 페이지로 이동
2. 시스템페이지 내에서 왼쪽 탭메뉴에서 `고급 시스템 설정`버튼 클릭
3. 별도 창에서 하단 `환경변수` 클릭
4. `환경변수` 창에서 **시스템 변수** 파트에서 **path**를 찾아 `편집버튼` 클릭
5. `편집창`에서  찾아보기 버튼 클릭 후 `sublime text 3`설치된 경로를 선택
   - `c://program files/sublime text 3` 경로 지정
6. 모든 창을 확인버튼 클릭하여 빠져 나간후(디렉토리까지 닫기) 
7. 실제 사용하는 디렉토리에서 마우스 오른버튼 클릭후 bash를 실행하여 `subl .` 입력시 실행

---

### 에디터 세팅

1. `package controls` 설치
   
   -  메뉴 > tools > command palette 클릭후(`ctrl shift p`)
   -  `install package controls`를 입력하여 설치
   -  list package : 설치한 목록보기
   -  remove package : 설치된 팩키지를 제거할때
   -  disable package : 설치된 팩키지를 사용중지할때
   -  enable package : 사용중지된 팩키지를 다시 사용할때
   
   
   
2. 이후 추가로 필요한 앱을 설치하려면

   - 메뉴 > tools > command palette 클릭후
   - `install package`검색하여 내부로 진입 하여 필요한 package를 찾아 설치

---

#### 주로 사용하는 package 목록

1. convert to utf-8
2. IMEsupport (맥에서는 설치 하지 않음)
3. sidebarEnhancement
4. Theme-soda(테마이기에 편한대로)
5. fileIcon
6. Increment selection
7. alignment
8. emmet
9. emmet css
10. print to HTML

