jQuery( document ).ready(function() {
  initBurgerMenu();
  initSlickSlider();
});

function initSlickSlider() {
  jQuery('.hero-slider').slick({
    fade: true,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing:'ease',
    infinity:true,
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>'
    // responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       }
    //   ]
});
}


function initBurgerMenu() {
  jQuery('.burger').on('click', function(e){
      e.preventDefault()
      jQuery(this).toggleClass('open');
      jQuery('body').toggleClass('burger-active');
  });
}

$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 1);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

