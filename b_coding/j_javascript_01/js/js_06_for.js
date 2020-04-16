// js_06_for.js


// while
// -----------------------------------------------
// 변수를 먼저 선언 
// while(조건의비교){ 
//  기능.....  
//  변수값의변화 }
// -----------------------------------------------

/*
var i = 100;// 변수선언
while(i < 10){//조건비교

 console.log(i);

i += 1; //변수의 변화
}
*/


// do~while
//-----------------------
// 최초의 변수선언
// do{
//  기능수행    
//  변수의변화
// } while(조건비교)
//-----------------------
/*
var i = 100;
do{
  console.log(i);
  i+=1;
} while (i < 150)
*/



//===================================
// for
// 최초의 변수값
// for(;조건비교;){  기능....     변수의변화}
// -------------------------------------------
// for(최초변수값; 조건비교; 변수의변화){ 기능... }
// --------------------------------------------


/*
var i = 0;
for(; i < 10 ;){
 console.log(i);
 i += 1;
}
*/

// var i=0;
// for(; i < 10; i+=1){
//   console.log(i);
// }
// console.log('i가 바깥에서 나올까? ', i);


// ----------------------------

var arr = ['월','화','수','목','금','토','일'];
var obj = {
    'kf94':'한국인증 초미세먼지용 마스크',
    'kf80':'한국인증 미세먼지용 마스크',
    'kn95':'중국인증 마스크',
};

// var j;
// for(j = 0; j < arr.length ; j++ ){
//   console.log( arr[j] + '요일' );
// }
// ----------------------------------------------
// for(var k in obj){
//   console.log(obj[k]);
// }
// ----------------------------------------------
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

arr.forEach(function(a){
  console.log(a)
});

// for       - 반복
// for ~ in  - 객체
// forEach   - 배열