//jQuery
//- 선택자 $('css선택자') => 여러 태그 모두 다

//JS
//- document.querySelector('css 선택자') => 첫째 요소


// 전체메뉴
$(".util a").click(function(){
  $(this).toggleClass('util_allmeun');
  $('.allmenu_wrap').toggle()
})

// 스크롤 다운 헤더 스타일 변경
$(window).scroll(function() {
  // console.log($(this).scrollTop())
  if($(this).scrollTop() > 5) {
    $('#header').addClass('scroll_up')
  }
  else {
    $('#header').removeClass('scroll_up')
  }
})


// 스와이퍼
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});




//흐르는 글자
flow();
window.addEventListener('resize', flow)

function flow() {
  const windowWidth = window.innerWidth;
  const flowContainer = document.querySelectorAll(".marquee_wrap");
  const flowElement = document.querySelectorAll(".marquee_wrap div");
  const flowWidth = flowElement.offsetWidth;
  const flowLength = windowWidth / flowWidth + 3;

  flowContainer.forEach((elm) => {
    elm.innerHTML = ''
    
    for (let i = 2; i < flowLength; i++) {
      const cloneElement = flowElement.cloneNode(true);
      elm.appendChild(cloneElement);
    }
  })
  console.log(flowElement)
  // flowContainer.innerHTML = ''
    
  // for (let i = 2; i < flowLength; i++) {
  //   const cloneElement = flowElement.cloneNode(true);
  //   document.querySelector(".marquee_wrap").appendChild(cloneElement);
  // }

}

// 원형으로 움직이는 글자

circle();
window.addEventListener("resize", circle)

function circle() {
  const text = document.querySelector('.circle_text p');
  text.innerHTML = text.innerText.split('').map(
    (char, i) => `<span style="transform:rotate(${i * 19.5
    }deg)">${char}</span>`
  ).join('');
  const str = text.innerText.split('').map((char,i) => `${i}. ${char}`)
}

// line();
// window.addEventListener("resize", line)

// function line() {
//   const element = document.getElementsByClassName(".section3");
//   element.scrollIntoView({ 
//     top: element.clientHeight / 2, 
//     left: element.clientWidth / 2, 
//     behavior: "block" 
//   });
// }


// $('.text_path').transition({ x: '40px' });


//ScrollTrigger 테스트
gsap.registerPlugin(ScrollTrigger)


gsap.to(".line", {
  height: '350px',
  scrollTrigger: {
    trigger: '.section3',
    start: "top bottom",//시작 지점
    end: "100% 80%",//끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1,//부드러운 스크러빙
    markers: true,//개발가이드선
  },
});


//포트폴리오 탭
$('.Hash_tag li').click(function() {
  const i = $(this).index();
  const w = 218;
  const pos = 218 * i;

  $('.focus').animate({left: pos}, 300)
  console.log($(this).offset().left)
})