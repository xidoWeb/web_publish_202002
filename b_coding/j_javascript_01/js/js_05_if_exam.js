// js_05_if_exam.js

var messageBox;

function Mes(){
  messageBox = prompt("수업을 듣고 있는 요일을 입력하세요.-1글자");
  if(messageBox == null){
    Mes();
  }else{

  var mLen = messageBox.length;

    if(mLen === 1){
      switch(messageBox){
        case '월':
          console.log('충전이 되었을테니 공부하러 갑시다!');
          break;

        case '화':     
        case '수':    
        case '목':
          console.log('평일입니다 힘내세요.');
           break;

        case '금':
          console.log('곧 주말이니 조금만 힘내세요.');
          break;

        case '토':
        case '일':
          console.log('주말이네요~ 쉬면좋겠죠? 과제부터하세요.');
          // break;

        default:
          console.log('정확한 요일을 입력하세요.');
          Mes();
      }
    }else{
       alert('다시 입력하세요');
        Mes(); 
    }
  }
 };

Mes();

// 과제: 재귀함수란???????

