var btn_nav_toggle = document.querySelector('.nav-toggle');
var navigation = document.querySelector('.navigation');
var btn_pressed = false;

btn_nav_toggle.onclick = function() {
  console.log('clicked');
  if(btn_pressed===false) {
    navigation.classList.add('navigation-mobile');
    btn_pressed = true;
  } else if(btn_pressed===true) {
    navigation.classList.remove('navigation-mobile');
    btn_pressed = false;
  }

};

var bg_colors = [['#ff6e7f', '#bfe9ff'],
                 ['#3a6186', '#89253e'],
                 ['#BE93C5', '#7BC6CC'],
                 ['#bdc3c7', '#2c3e50'],
                 ['#42275a', '#734b6d'],
                 ['#141E30', '#243B55'],
                 ['#2C3E50', '#FD746C'],
                 ['#904e95', '#e96443'],
                 ['#1D4350', '#A43931'],
                 ['#F4E2D8', '#BA5370'],
                 ['#000000', '#434343']];

var btn_bg = document.querySelector('.btn-bg');
var main = document.querySelector('.main');

var index = 0;
function bgColorRandom() {
  btn_bg.onclick = function() {
    if(index < bg_colors.length) {
      var bg = 'linear-gradient(-35deg, ' + bg_colors[index][0] + ', ' + bg_colors[index][1] + ')';
      main.style.background = bg;
      index++;
    } else {
      index = 0;
    }
  };
}
bgColorRandom();
