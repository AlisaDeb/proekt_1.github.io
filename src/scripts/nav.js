const buttonBurger = document.querySelector('.js-button-burger')
const navHeader = document.querySelector('.js-nav')

buttonBurger.addEventListener('click', (event) => {
    
    navHeader.classList.add('nav_active')

})