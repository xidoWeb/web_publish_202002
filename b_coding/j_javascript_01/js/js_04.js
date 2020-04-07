// js_04.js

/** =========================================
  * javascript 자료형
   기본형 - 숫자, 문자(' '), 논리형(참: true/거짓: false), 심볼
   특수형 - undefined, null
   복합형 - 객체(배열, 객체), 함수
========================================= */

// typeof()

var n = 7;
var r, t2;
var t = typeof(n);
// console.log(n + '은' + t + '이다.');

    n = 'text';
    t = typeof(n);
// console.log(t);

    n = 1 === 10;
    t = typeof(n);
    // console.log(t);

    n = null;
    t = typeof(n);
    t2 = typeof(r);
    // console.log(t, t2);

    var check = n == r;
    // console.log(check);

    // =기호가 
    // 1개일경우 : 대입
    // 2개일경우 : 비교(단순 값만 비교)
    // 3개일경우 : 형타입(typeof)을 비교

    check = 1 === '1';
    // console.log(check);

// null은 값을 강제 삭제시키는 형태이며, 형타입은 객체(object) 형식
// undefined는 에초에 값을 넣은 적이 없으므로, 형타입은 미정의(undefined) 형식
// ============================================================================

// 배열(array-list)-단순 목록을 나열하는 형태 : []
// 객체(object-dictionary) : {}
// 함수(function) : function(){}

var arr = [1, 2, 10, 5, 100, 70, 'apple', 'grape', 'banana', '집'];
// t = typeof(arr);
// console.log(t);

var f1= 'apple';
var f2= 'banana';
var f3= 'grape';
var f4= 'melon';

var fruit = [f1, f2, f3, f4];
// console.log( fruit[0] );


// CSS 1번째를 -> 1
// 다른 프로그램 언어 : 1번째는 -> 0

// ==============================================================

var obj = {
          "apple"  : "red"    ,
          "banana" : "yellow" ,
          "grape"  : "green"  ,
          "melon"  : "mint",
          "monkey banana": "deep yellow"
};

// t = typeof(obj);
// console.log(t);

// console.log(obj["monkey banana"]);
// console.log(obj.banana);
// console.log(obj["banana"]);

var obj2 = {
  0:'samsung',
  1:'apple',
  2:'lg',
  3:'google'
};

// console.log(obj2[0]);

// ----------------------------------------------------------------

// var Fn = function(){}; // 함수 표현식
// function Fn1(){}       // 함수 선언식

function F1(i, d){
  return i * d * 8570;
}
// t = typeof(F1);
// console.log(t);

console.log( F1(8, 4) );

// ============================================
// 함수: 기능을 수행하게 만드는 묶음
// 객체: 속성명:값 형식의 나열
// 배열: 값의 나열
// boolean: true/false 을 비교하여 판단
// 문자 : '', "" 묶여서 글자로 인지되는 형태
// 숫자 : 소수, 음수, 양수, 정수.....
// null : 이미사용한 변수/배열/객체의 내용을 비우는 것
// undefined: 사용하기전 선언은되어있으나 값이 비어있는 것
