//document에서 필요한 속성을 선택하고 함수를 실행한다

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// setAttribute html속성을 지정할때 사용한다

searchInputEl.addEventListener('focus' , function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder' , '통합검색')
});

//blur 포커스가 풀린 상태를 말한다 반대개념
searchInputEl.addEventListener('blur' , function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder' , '')
});

//뱃지 스크롤
// lodash cdn -스크롤 라이브러리 사용 _.throttle 스크롤이 될때 시간 지연시킨다 화면이 버벅거리는걸 방지 할수 있어서 스크롤 이벤트에 많이 사용된다
// gsap cdn 스크롤 애니메이션 라이브러리 사용
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll' , _.throttle( function () {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    //배지숨기기
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else{
    //배지보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    
  }
}, 300));



// _.throttle(함수, 시간)



// 이미지 페이드인
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity:1
  });
});



// new Swiper(선택자 , 옵션-객체데이터) 수직슬라이드 
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});