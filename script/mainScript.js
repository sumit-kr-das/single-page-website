var counter = 1;
setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  counter++;

  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// aos Animation timer code
AOS.init({
  offset: 300,
  duration: 1000,
});

// slick slider code
$(document).ready(function(){
  $('.multiple-items').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
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
