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
var swiper = new Swiper(".swiper", {
  pagination: {   
    el: ".swiper-pagination",
  },
});

//badge
const badgeEl = document.querySelector('.badge')

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      // display: 'none'
    })
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      // display: 'block'
    })
  }
})