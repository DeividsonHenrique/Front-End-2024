let menuIcon = document.querySelector('.nav__menu-icon')
let nav = document.querySelector('#nav')

menuIcon.addEventListener('click', ()=>{
    nav.classList.toggle('show__menu')
})
