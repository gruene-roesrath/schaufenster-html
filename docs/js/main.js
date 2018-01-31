$(function() {

  var slideDuration = 10000; // milliseconds

  var slides = $('div.container');
  var numSlides = slides.length;
  var currentSlide = 0;

  // hide all but the first slide
  slides.hide();
  $(slides[currentSlide]).show();

  var nextSlide = function(){
    console.log("Hiding slide", currentSlide);
    $(slides[currentSlide]).hide();

    currentSlide++;
    if (currentSlide === numSlides) {
      currentSlide = 0;
    }

    console.log("Showing slide", currentSlide);
    $(slides[currentSlide]).show();
  };

  window.setInterval(nextSlide, slideDuration);

});
