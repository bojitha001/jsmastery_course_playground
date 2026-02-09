import gsap from 'gsap';

const repaeat = document.querySelector('.repeat');

const animation = gsap.from('.card', {
    y:60,
    opacity:0,
    scale:0.95,
    duration:0.6,
    ease:'power4.out',
    stagger:0.2
})


repaeat.addEventListener('click', () => {
    animation.restart();
})