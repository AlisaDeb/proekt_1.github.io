const buttonBurger = document.querySelector('.js-button-burger')
const navHeader = document.querySelector('.js-nav')

buttonBurger.addEventListener('click', (event) => {
    
    if(navHeader.classList.contains('nav_active')) {
        navHeader.classList.remove('nav_active')
    } else {
        navHeader.classList.add('nav_active')
    }
    
})