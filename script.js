const carusel = document.querySelector('.infinity')
const slider = document.querySelector('.slider1');
const slides = document.querySelectorAll('.infItem');

let currentIndex = 0;
const slideInterval = 0;// Интервал между сменой слайдов (в миллисекундах)

function nextSlide() {
    slider.style.transitionTimingFunction = 'linear';
    slider.style.left = -200 + '%'
}



for (let i = 1; i <= 5; i++) {
    setInterval(nextSlide, slideInterval);
    slider.style.left = 100 + '%'// Output: 1, 2, 3, 4, 5
  }


counter = 0;
const slider2 = document.querySelector('.contentLine2')
document.querySelector('#next2').addEventListener('click', function(){
    counter++
    if (counter>3){counter=0}
    slider2.style.transition = 'all ease 1s'
    slider2.style.left = -400*counter + 'px'
});
document.querySelector('#prev2').addEventListener('click', function(){
    counter--
    if (counter<0){counter=3}
    slider2.style.left = -400*counter + 'px'
});


counter6 = 0;
const slider6 = document.querySelector('.sliderLine6')
document.querySelector('#next6').addEventListener('click', function(){
    counter6++
    if (counter6>3){counter6=0}
    slider6.style.left = -485*counter6 + 'px'
});
document.querySelector('#prev6').addEventListener('click', function(){
    counter6--
    if (counter6<0){counter6=3}
    slider6.style.left = -485*counter6 + 'px'
});

counter7 = 0;
const slider7 = document.querySelector('.sliderLine7')
document.querySelector('#next7').addEventListener('click', function(){
    counter7++
    if (counter7>3){counter7=0}
    slider7.style.left = -380*counter7 + 'px'
});
document.querySelector('#prev7').addEventListener('click', function(){
    counter7--
    if (counter7<0){counter7=3}
    slider7.style.left = -380*counter7 + 'px'
});



dialog = document.querySelector('.dialog');
document.querySelector('#orange').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('#secondMainButton').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('#blueButton').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('.button4').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('#callme').addEventListener('click', function(){
    dialog.style.display = 'flex';
});
document.querySelector('.dialog').addEventListener('click', function(){
    dialog.style.display = 'none';
});
document.querySelector('.modal').addEventListener('click', function(){
    dialog.style.display = 'none';
});



counterM = 0;
const slider2M = document.querySelector('.contentLine2M')
document.querySelector('#next2M').addEventListener('click', function(){
    counterM++
    if (counterM>3){counterM=0}
    slider2M.style.transition = 'all ease 1s'
    slider2M.style.left = -400*counterM + 'px'
});
document.querySelector('#prev2M').addEventListener('click', function(){
    counterM--
    if (counterM<0){counterM=3}
    slider2M.style.left = -400*counterM + 'px'
});

counter6M = 0;
const slider6M = document.querySelector('.sliderLine6M')
document.querySelector('#next6M').addEventListener('click', function(){
    counter6M++
    if (counter6M>3){counter6M=0}
    slider6M.style.left = -372*counter6M + 'px'
});
document.querySelector('#prev6M').addEventListener('click', function(){
    counter6M--
    if (counter6M<0){counter6M=3}
    slider6M.style.left = -372*counter6M + 'px'
});
