//jQuery
//- 선택자 $('css선택자') => 여러 태그 모두 다

//JS
//- document.querySelector('css 선택자') => 첫째 요소


// 전체메뉴
$(".util a").click(function(){
  $(this).toggleClass('util_allmeun');
  $('.allmenu_wrap').toggle()
})
$(".allmenu a").click(function(){
  $(".allmenu_wrap").hide()
  $(".util a").toggleClass('util_allmeun');
})
$('.allmenu .dep2 li').click(function() {
  const i = $(this).index();
  const secName = $(this).attr('class')
  const w = 200;
  const pos = 200 * i;

  console.log(i)

  $('.focus').animate({left: pos}, 300)
  $('.portfolio_img .' + secName).css({display:"grid"})
  $('.portfolio_img .pf_design').not('.' + secName).css({display:"none"})
  console.log(secName)
})
$(".allmenu .brochure").click(function(){

  $('.focus').animate({left: 0}, 300)
  $('.portfolio_img .brochure').css({display:"grid"})
  $('.portfolio_img .pf_design').not('.brochure').css({display:"none"})
})


// 글자색상바꾸기

//ScrollTrigger 테스트
gsap.registerPlugin(ScrollTrigger);

const text = ".section2 strong";
gsap.to(text, {
  backgroundSize: "100%",
  scrollTrigger: {
    trigger: ".section2",
    start: "20% bottom",
    end: "bottom 90%",
    scrub: true,
    markers: true
  },
});




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
window.addEventListener("resize", flow)

function flow() {
  const windowWidth = window.innerWidth;
  const flowContainer = document.querySelectorAll(".marquee_wrap div");
  const flowElement = document.querySelectorAll(".marquee_wrap");
  const flowWidth = flowElement.flowContainer;
  const flowLength = windowWidth / flowWidth + 1;
  // const flowLength = windowWidth / flowWidth + 2;
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




gsap.to(".line", {
  height: '350px',
  scrollTrigger: {
    trigger: '.section3',
    start: "top bottom",//시작 지점
    end: "100% 80%",//끝 지점
    // end: "+=500"//시작 부분부터 500px까지 스크롤 한 후종료
    scrub: 1,//부드러운 스크러빙
    // markers: true,//개발가이드선
  },
});

// 포폴 썸네일
$('.pf_design img').click(function(e) {
  e.preventDefault();
  const thumbName = $(this).attr('src')
  const newName = thumbName.replace('.jpg', '_detail.png')

  $('.pf_detail').show()
  $('.detail_box img').attr('src', newName)
  console.log(newName)
});
$('.detail_close').click(function() {
  $('.pf_detail').hide()
});






//포트폴리오 탭
$('.hash_tag li').click(function() {
  const i = $(this).index();
  const secName = $(this).attr('data-filter')
  const w = 210;
  const pos = 230 * i;

  $('.focus').animate({left: pos}, 300)
  $('.portfolio_img .' + secName).css({display:"grid"})
  $('.portfolio_img .pf_design').not('.' + secName).css({display:"none"})
  console.log(secName)
})


const about = ".section5 h3";
gsap.to(about, {
  transform: "0",
  scrollTrigger: {
    trigger: ".section5",
    start: "-20% bottom",
    end: "bottom 90%",
    scrub: true,
    markers: true
  },
});


// 롤링 배너 복제본 생성

