'use strict'

// 네비게이션바 스크롤하면 불투명하게끔
const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height

document.addEventListener('scroll', () => {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark')
  } else {
    navbar.classList.remove('navbar--dark')
  }
})

// 해당 탭으로 이동
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({behavior: "smooth"})
}

const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click', (event) => {
  const target = event.target
  const link = target.dataset.link
  if(link === null) {
    return 
  }
  scrollIntoView(link)
})

// contact 버튼 클릭 후 contact 탭으로 이동
const contactBtn = document.querySelector('.home__contact')
contactBtn.addEventListener('click', () => {
  scrollIntoView('#contact')
})

// 스크롤하면 해당 탭 투명하게
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight
})

// 맨위로 이동 버튼
const arrowbtn = document.querySelector('.arrowbtn')
document.addEventListener('scroll', () => {
  arrowbtn.style.opacity = window.scrollY / homeHeight
})
arrowbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})