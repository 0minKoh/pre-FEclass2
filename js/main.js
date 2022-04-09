//1페이지 페이드인 효과
const fadeEls1 = document.querySelectorAll('.background1 .fadeIn')
fadeEls1.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) *.7,
    opacity: 1
  })
})

//2페이지 페이드인 효과
const fadeEls2 = document.querySelectorAll('.background2 .fadeIn')
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    fadeEls2.forEach(function (fadeEl, index) {
      gsap.to(fadeEl, 1, {
        delay: (index + 1) *.7,
        opacity: 1
      })
    })
  }
})

//슬라이드 요소
const swiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 50, //box사이 여백
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {   
    el: ".swiper-pagination",
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})

//badge
const badgeEl = document.querySelector('.badge')

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    })
  }
})