var 이미지좌표 = '0'; ///변수는 짧다고 좋은게 아님 자세하면 좋은거임.
var 가위바위보 = { ///딕셔너리 자료구조
  바위: '0',
  가위: '-185px',
  보: '-380px'
};

// var 가위바위보2 = {          딕셔너리 객체를 거꾸로 만들어줘야함 
//   '0': '바위',             하지만 이건 비효율적임 
//   '-185px': '가위',        그래서 나온게 Object.entries로
//   '-380px': '보',          객체를 2차원 배열로 바꿀 수 있다.
// }
/// 이런 하드코딩을 제거하는게 정말 힘들다 

console.log(Object.entries(가위바위보));
function 컴퓨터의선택(이미지좌표) {
  return Object.entries(가위바위보).find(function(y){ /// find는 반복문인데 돌다가 return이 true가 될때를 찾아준다.
    return y[1] === 이미지좌표;
  })[0]; // 배열이니까 첫번째거 가져오게 한거임.
} 


var 인터벌;
function 인터벌메이커() {
  clearInterval(인터벌);
  인터벌 = setInterval(function() {     /// setInterval를 멈추게 하기   위해서 변수로 설정
    if (이미지좌표 === 가위바위보.바위) {
      이미지좌표 = 가위바위보.가위;
   } else if(이미지좌표 === 가위바위보.가위){
      이미지좌표 = 가위바위보.보;
    } else {
     이미지좌표 = 가위바위보.바위;
    }
    document.querySelector('#computer').style.background = 
     'url(../MiniGameJs/가위바위보.jpg)' + 이미지좌표 + ' 0' 
    },100);
}

인터벌메이커();

var 검수표 = {
  가위:1,
  바위:0,
  보:-1
}

 document.querySelectorAll('.btn').forEach(function(btn){ /// Html의 가위, 바위, 보 모두 같은 동작을 하기 때문에 class로 묶고 사용 (다만) All을 해야 모두 동작을 함
  btn.addEventListener('click', function(){  ///querySelector는 forEach를 지원하기 때문에 for문으로 반복할 필요가 없다.
    clearInterval(인터벌);
    setTimeout(function(){
      인터벌메이커();
    },100);
    var 나의선택 = this.textContent;   
    var 나의점수 = 검수표[나의선택];    /// 변수를 사용해서 중복되는 것을 제거하자.
    var 컴퓨터점수 = 검수표[컴퓨터의선택(이미지좌표)];
    var 점수차 = 나의점수 - 컴퓨터점수;
    if(점수차 === 0) {
      console.log('비겼습니다')
    } else if([-1,2].includes(점수차)){
      /// 검수표[나의선택] - 검수표[컴퓨터의선택(이미지좌표)] === -1 || 검수표[나의선택] - 검수표[컴퓨터의선택(이미지좌표)] === 2
      console.log('이겼습니다')
    } else {
      console.log('졌습니다')
    }
    console.log(나의선택, 컴퓨터의선택(이미지좌표)) /// this.textContent는 우리가 뭘 냈는지, left는 컴퓨터가 뭘 냈는지
 });
});



// 가위 : 1 , 바위 : 0, 보 : -1
// 나/컴퓨터      가위  바위   보
//         가위  1 1  1 0  1 -1
//         바위  0 1  0 0  0 -1
//         보  -1 1  -1 0 -1 -1
