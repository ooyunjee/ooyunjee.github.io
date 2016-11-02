var hamburger_btn = document.querySelector('.hamburger-img');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector('.container');
var is_clicked = false;

console.log(hamburger_btn);
console.log(sidebar.classList);

hamburger_btn.onclick = function() {
  if(is_clicked === true) {
    console.log('is_clicked === true');
    sidebar.classList.add('hide');
    container.classList.remove('drawer');
    is_clicked = false;
  } else if(is_clicked === false) {
    sidebar.classList.remove('hide');
    container.classList.add('drawer');
    is_clicked = true;
  }
};

var main_slider = document.querySelectorAll('.main-slider .slide');
var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

var btn_next = document.querySelector('.btn-next');
var btn_prev = document.querySelector('.btn-prev');
console.log(btn_next);

function goToSlide(n) {
  main_slider[currentSlide].setAttribute('class', 'slide');
  currentSlide = (main_slider.length + n) % main_slider.length;
  main_slider[currentSlide].setAttribute('class', 'slide showing');
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

btn_next.onclick = nextSlide;
btn_prev.onclick = prevSlide;
