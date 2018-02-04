// global timer for slide changes
var slidesTimer;

$(function() {

  // Duration of one slide in milliseconds
  var slideDuration = 10000;

  // DOM elements we use as slides
  var slides = $('div.container');
  
  var numSlides = slides.length;
  var currentSlide = 0;

  // hide all but the first slide
  slides.hide();
  $(slides[currentSlide]).show();

  // Function to switch slides in a rotation
  var nextSlide = function(){
    console.log("Hiding slide", currentSlide);
    $(slides[currentSlide]).hide();

    currentSlide++;
    if (currentSlide === numSlides) {
      currentSlide = 0;
    }

    console.log("Showing slide", currentSlide);
    $(slides[currentSlide]).show();

    window.clearTimeout(slidesTimer);
    slidesTimer = window.setTimeout(nextSlide, slideDuration);
  };

  // Click handler for manual skipping (good for testing)
  $('body').click(function(){
    nextSlide();
  });

  // Start the rotation
  slidesTimer = window.setTimeout(nextSlide, slideDuration);
});
