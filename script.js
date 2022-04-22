const nxtBtn = document.querySelectorAll('.next-btn');
const preBtn = document.querySelectorAll('.pre-btn');
const slides = document.querySelectorAll('.banner');
const menuBtn = document.querySelectorAll('.menu');
const menuOverlay = document.querySelector('.menu-overlay');


let i = 0

console.log(slides)

function nextSlide(){
    slides[i].classList.remove('active');
    i=(i+1)%slides.length;
    slides[i].classList.add('active')
}
function prevSlide(){
    slides[i].classList.remove('active');
    i= (i-1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

slides.forEach((item, i) => {
    nxtBtn[i].addEventListener('click', nextSlide)
    preBtn[i].addEventListener('click', prevSlide)
})


function toggleNav(){

    // menuOverlay.classList.toggle('menu-active');
    menuOverlay.classList.toggle('overlay-slide-right');
    console.log(menuOverlay.classList)

}

// menuBtn.addEventListener('click',toggleNav)

slides.forEach((item, i) => {
    nxtBtn[i].addEventListener('click', nextSlide)
    preBtn[i].addEventListener('click', prevSlide)
})


menuBtn.forEach((item) => {
    item.addEventListener('click', toggleNav)
})

menuOverlay.addEventListener('click', toggleNav)







