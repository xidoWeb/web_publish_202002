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
    console.log(check);

// null은 값을 강제 삭제시키는 형태이며, 형타입은 객체(object) 형식
// undefined는 에초에 값을 넣은 적이 없으므로, 형타입은 미정의(undefined) 형식
// ============================================================================

// 배열(array-list) : []
// 객체(object-dictionary) : {}
// 함수(function) : function(){}