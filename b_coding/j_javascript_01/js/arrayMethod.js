/* 
 * array 메소드

 - 변수.length                 -> 갯수파악
 - 변수.push(['value'])        -> 배열상의 뒤에 첨부
 - 변수.pop()                  -> 배열상의 마지막 요소를 제거
 - 변수.unshift(['value'])     -> 배열상의 첫요소에 첨부
 - 변수.shift()                -> 배열상의 첫요소를 제거
 - 변수.indexOf(['value'])     -> 값이 몇번째 위치했는지 파악(0이 첫번째)
 - 변수.splice(순서위치, 갯수)   -> 순서위치에서부터 갯수만큼 제거
 - 변수.slice()                -> 별도의 변수에 사본을 만드는것
                                 변수를 새로만들어서 내용을 수정하면 같이변경되므로, 이전내용을 가질 수 있도록 복사

*/

var array_01 = ['html', 'css', 'javascript'];

array_01.push('sass');
array_01.push('ejs');
array_01.push('typescript');

// console.log( array_01.length );

array_01.pop();
// console.log( array_01 );

array_01.unshift('bash');
array_01.unshift('editor');
// console.log(array_01);

array_01.shift();
array_01.shift();

// console.log( array_01 );

var i = array_01.indexOf('sass');
// console.log( i ); // 1

array_01.splice(i, 2);
// console.log( 'array_01: ', array_01 );

var ar_02 = array_01;  //.slice();
// console.log( 'ar_02:' , ar_02 );

array_01.push('elm');
// console.log( array_01 );
// console.log( ar_02 );


var a = [1,2,3,4];
var b = a;
console.log(a  ,  b);

var c = a.slice();

a.pop();
a.unshift('123');

console.log(a  ,   b,    c);