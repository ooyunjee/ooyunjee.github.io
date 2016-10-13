// makes the parallax elements
function parallaxIt() {

  // create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // on window scroll event
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  });

  // for each of background parallax element
  $('[data-type="background"]').each(function(){
    var $backgroundObj = $(this);
    var bgOffset = parseInt($backgroundObj.offset().top);
    var yPos;
    var coords;
    var speed = ($backgroundObj.data('speed') || 0 );

    $fwindow.on('scroll resize', function() {
      yPos = - ((scrollTop - bgOffset) / speed);
      coords = '50% '+ yPos + 'px';

      $backgroundObj.css({ backgroundPosition: coords });
    });
  });

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
}

var width = 0;
function updateWindowSize() {
    if (document.body && document.body.offsetWidth) {
      width = document.body.offsetWidth;
    }
    if (document.compatMode=='CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth ) {
       width = document.documentElement.offsetWidth;
    }
    if (window.innerWidth) {
       width = window.innerWidth;
    }
}

updateWindowSize();
console.log(width);

if(width > 768) {
  parallaxIt();
}
