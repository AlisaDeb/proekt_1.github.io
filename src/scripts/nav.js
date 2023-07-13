const buttonBurger = document.querySelector('.js-button-burger')
const navHeader = document.querySelector('.js-nav')

const body = document.body

buttonBurger.addEventListener('click', (event) => {
    
    if(!navHeader.classList.contains('nav_active')) {
        body.style.overflow = 'hidden'
        navHeader.classList.add('nav_active')
    } else {
        body.style.overflow = ''
        navHeader.classList.remove('nav_active')
    }

})