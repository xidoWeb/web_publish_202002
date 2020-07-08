
// 날짜 계산하기
// var myDate = Date().split(' ');
// console.log ( myDate );

var weekArr  = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'];
var date     = new Date();                             // 날짜를 파악하는 함수  
var today    = date.toDateString();					           // 연, 월, 일, 요일 (현재날짜 전체)
var year     = date.getFullYear();                     // 현재 연도
var month    = date.getMonth() + 1;                    // 월 (0은 1월)
var weekDay  = weekArr[ date.getDay() ];               // 요일
var day      = date.getDate();                         // 날짜
var lastDay  = new Date(year, month, 0).getDate();     // 마지막일 파악하기....(수정요청)

var time     = date.toLocaleTimeString();              // 현재시간 전체
var hours    = date.getHours();                        // 현재 시
var minutes  = date.getMinutes();                      // 현재 분
var seconds  = date.getSeconds();                      // 현재 초
var milliSeconds  = date.getMilliseconds();            // 현재 1/1000초

// console.log(lastDay);

var yy   = document.querySelector('.yy');
var mm   = document.querySelector('.mm');
var dd   = document.querySelector('.dd');
var wd   = document.querySelector('.week_day');
var ti = document.querySelector('.time');

yy.innerHTML = year;         // $('.yy').html(year);
mm.innerHTML = month;        // $('.mm').html(month);
dd.innerHTML = day;          // $('.dd').html(day);
wd.innerHTML = weekDay;      // $('.week_day').html(weekDay);

setInterval(function(){
	var myTime  = new Date().toLocaleTimeString();  
	ti.innerHTML = myTime;         // $('.time').html(time);
},100);

