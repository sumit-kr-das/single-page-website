// header slider
$('.single-item').slick({
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  infinite: true,
  arrows:false
});

// aos Animation timer code
AOS.init({
  offset: 300,
  duration: 1000,
});

// slick slider code
$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
})

// slick slider life section

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  prevArrow:'.leftArrow',
  nextArrow:'.rightArrow'
});