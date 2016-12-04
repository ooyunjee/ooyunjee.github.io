(function(global) {
  'use strict';

  var navigation = document.querySelector('.header-nav');
  var header_logo = navigation.querySelector('.header-logo');

  window.onscroll = function() {
    var scroll_y = global.scrollY || global.pageYOfsset || global.scrollTop;

    if(scroll_y >= 980) {
      navigation.classList.add('fixed');
      header_logo.setAttribute('src', 'img/assets/icon-logo-fixed.svg');
    } else {
      navigation.classList.remove('fixed');
      header_logo.setAttribute('src', 'img/assets/icon-logo.svg');
    }
  }
})(this);
