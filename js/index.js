var faqList = document.getElementsByClassName("faq_list");
var openStateIcon = document.getElementsByClassName("open_state_icon");
// 배열 변수가 되어 6개에 다 들어간다.
var openState = [0, 0, 0, 0, 0, 0];
// 6개(0~5)의 숫자를 가진 배열 변수, 6개는 List 오픈 상태 저장 배열 변수
// 닫혀져있는 상태를 저장하는 배열

// 12/7 이벤트 수업 온로드
window.load = main();

function main() {
  console.log("Document Loaded");
}

function accOpen(clickNum) {
  if (openState[clickNum] == 0) {
    // 일단 다 0으로 초기화 해주고
    for (i = 0; i < faqList.length; i++) {
      faqList[i].style = "max-height: 60px;";
      openStateIcon[i].style = "transform:rotate(0deg);";
      openState[i] = 0;
    }
    // 클릭된 변수만 열어줘라
    faqList[clickNum].style = "max-height:600px;";
    openStateIcon[clickNum].style = "transform:rotate(45deg);";
    openState[clickNum] = 1; // 클릭된 리스트의 오픈 상태를 열려 있는 것으로 저장
  } else {
    // 열려있는 상황엔 다 닫아줘라
    faqList[clickNum].style = "max-height: 60px;";
    openStateIcon[clickNum].style = "transform:rotate(0deg);";
    openState[clickNum] = 0; // 클릭된 리스트의 오픈 상태를 닫혀 있는 것으로 저장 (업데이트)
  }

  // for (i=0; i<1500; i++) {
  //     document.getElementById('faq_icon').style = "left:" + i + "px;";
  // }

  // if(openState[clickNum] == 0) {
  //     faqList[clickNum].style = "max-height:600px;"
  //     openStateIcon[clickNum].style = "transform:rotate(45deg);"
  //     openState[clickNum] = 1; // 클릭된 리스트의 오픈 상태를 열려 있는 것으로 저장
  // } else {
  //     faqList[clickNum].style = "max-height: 60px;"
  //     openStateIcon[clickNum].style = "transform:rotate(0deg);"
  //     openState[clickNum] = 0; // 클릭된 리스트의 오픈 상태를 닫혀 있는 것으로 저장 (업데이트)
  // }
}

// var i = 0;

// function aniIcon() {
//     if(i > 800) {return;}
//     document.getElementById('faq_icon').style = "left:" + i + "px";
//     i = i + 10;
//     setTimeout(aniIcon, 10);
// }

// aniIcon();

// 1119

var hero = document.getElementById("hero");

var randomBgNumber = Math.floor(Math.random() * 9);
hero.style.backgroundImage = "url(img/bg_" + randomBgNumber + ".jpg";

// var randomBgNumber = Math.floor(Math.random() * 10);

// console.log(randomNumber);

// 포스터 이미지 랜덤으로 변경
// 파일이름에 뒤에 1,2,3만 바꿔서 로테이트 하고싶어서 정수(필요한 숫자의 구간)가 필요
// 그래서 math.floor값 줘서 소수점 버림
// var randomNumber = Math.floor(Math.random() * 10);

// if (randomNumber < 4) {
//   document.getElementById("hero").style =
//     "background-image:url('img/poster" + randomNumber + ".jpeg'";
// }

// function snow() {
//   randomSize = Math.floor(Math.random * 10);
//   randomX = Math.floor(Math.random() * window.innerWidth);
//   randomY = Math.floor(Math.random() * window.innerHeight);

//   for (i = 0; i < 10; i++) {
//     randomSize = Math.floor(Math.random * 10);
//     randomX = Math.floor(Math.random() * window.innerWidth);
//     randomY = Math.floor(Math.random() * window.innerHeight);
//     document.getElementsByClassName("snowball")[i].style =
//       "width:" +
//       randomSize +
//       "px;" +
//       "height:" +
//       randomSize +
//       "px;" +
//       "border-radius:" +
//       randomSize / 2 +
//       "px;" +
//       "top:" +
//       randomX +
//       "px;" +
//       "left:" +
//       randomX +
//       "px;" +
//       "display:block;";
//   }
// }

// snow();

// 1119 스크롤 이벤트

// 1. 스크롤 높이를 알기
// 1)  현재 화면의 크기를 찾을 수 있다.
// inner 화면만 생각했을때
console.log(window.innerWidth); //1920
console.log(window.innerHeight); // 543
// outer 물리적 너비 생각 했을때
console.log(window.outerWidth); // 1920
console.log(window.outerHeight); // 1057 => 1080에서 크롬 바를 뺀 값

function scrollAnimation() {
  console.log(window.pageYOffset);
  console.log(window.scrollY);
  // 둘다 값이 일치한다.

  // 어떤 요소가 페이지에서 랜더링이 되었을때 값이 유동적인데, 이때 값을 찾아주기 위해서
  // offsetTop 값을 찾으면 높이 시작하는 점을 찾아준다.
  //
  console.log(document.getElementById("tv_text_li").offsetTop);

  // document.getElementById("scroll_position").innerHTML = window.scrollY;

  // TV로 즐기세요 텍스트 효과

  var scrollPoint = window.scrollY + window.innerHeight;
  //처음 스타트를 900얼마에서 시작하고 그 값을 텍스트값을 잡아서
  // offsetTop값으로 요소의 랜더링되었을때 높이값을 찾아(스크롤탑과는 다른 값)
  // offsetTop 값은 맨 꼭대기에서부터 위치값이다.
  // 그러니까 이것들을 비교하는것
  // 스크롤 포인트와 높이값을 뺐을때 0보다 크면
  // 자기위치에서 스타트포인트가 되면 부자연스러워서 200정도의 차이가 생겼을때 시작하겠다는것
  // 스크롤 포인트와 요소의 높이 빼기가 200을 지나치면, 넘어가면 스타트를 시작하라는 조건을 씀
  // 트리거 포인터 시점을 해준것

  var tvText = document.getElementById("tv_text_li");
  var offlineText = document.getElementById("offline_text_li");
  var deviceText = document.getElementById("device_text_li");

  // if (window.scrollY - window.innerHeight > document.getElementById("tv_text_li").offsetTop)
  // if (scrollPoint > tvText.scrollTop + 100) +100앞의 공식은 잘못된것 조금 더 천천히 하고 싶을땐 +100
  if (scrollPoint - tvText.offsetTop > 200) {
    tvText.style = "animation:fade_in_opacity 2s forwards";
  }
  // 200은 간격을 의미 (흠,, 잘 모르겠다..)
  if (scrollPoint - offlineText.offsetTop > 200) {
    offlineText.style = "animation:fade_in_opacity 2s forwards";
  }

  if (scrollPoint - deviceText.offsetTop > 200) {
    deviceText.style = "animation:fade_in_opacity 2s forwards";
  }
}
