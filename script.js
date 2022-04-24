const nxtBtn = document.querySelectorAll('.next-btn');
const preBtn = document.querySelectorAll('.pre-btn');
const slides = document.querySelectorAll('.banner');
const container = document.querySelector('[data-container]');
const menuBtn = document.querySelectorAll('.menu');
const menuOverlay = document.querySelector('.menu-overlay-hidden');


let i = 0

function nextSlide(){
    
    i=(i+1)%slides.length;
    // slides[i].style.transform=`translateY(${-100*i}%)`; 
    container.style.setProperty('--current-slide',i)
}
function prevSlide(){
    i= (i-1 + slides.length) % slides.length;
    container.style.setProperty('--current-slide',i)

}

slides.forEach((item, i) => {
    nxtBtn[i].addEventListener('click', nextSlide)
    preBtn[i].addEventListener('click', prevSlide)
})


function toggleNav(){
    menuOverlay.classList.toggle('menu-overlay-display');
}

slides.forEach((item, i) => {
    nxtBtn[i].addEventListener('click', nextSlide)
    preBtn[i].addEventListener('click', prevSlide)
})


menuBtn.forEach((item) => {
    item.addEventListener('click', toggleNav)
})

menuOverlay.addEventListener('click', toggleNav)







