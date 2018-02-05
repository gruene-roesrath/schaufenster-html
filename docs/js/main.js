// true means auto playback, false means pause (click to proceed)
var autoplay = true;

// global timer for slide changes
var slidesTimer;

// global timer for events loading
var loadEventsInterval;

// global events storage
var calendarEvents = [];

// set date/time locale
moment.locale('de');

/**
 * Function to load events from an iCal calendar
 */
var loadEvents = function(url, num, charset, callback) {
  var endpoint = "https://schaufenster-service.now.sh/events/";
  $.ajax(endpoint, {
    data: {
      ical_url: url,
      num: num,
      charset: charset
    },
    dataType: "json",
    error: function(jqXHR, errorString, exception){
      console.error("loadEvents error:", errorString);
    },
    success: function(data, status, xhrObject){
      callback(data);
    }
  });
};

// Parse content,
// enrich data-driven templates,
// start dynamic playback
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

  // parse event slides
  $(".container.event").each(function(index, element){
    var $el = $(element);
    var dataset = $(element).data();

    // process ical
    if (dataset.calendarUrl) {
      loadEvents(dataset.calendarUrl, 1, dataset.calendarCharset, function(events){
        console.log("Received event:", events[0]);
        // TODO: make sure this event is really in the future
        // insert event values into HTML template
        var start = moment(events[0].start);
        $el.find(".title").text(events[0].title);
        $el.find(".date").text(start.format("D"));
        $el.find(".weekday").text(start.format("dddd"));
        $el.find(".month").text(start.format("MMMM"));
        $el.find(".time").text(start.format("HH:mm"));
        $el.find(".relative").text(start.fromNow());
      });
    }

  });
  // var loadMyEvents = function() {
  //   var icalURL = "https://gruene-roesrath.de/termine/cal/ics/?type=150&tx_cal_controller%5Bcalendar%5D=649";
  //   loadEvents(icalURL, 3, "utf-8", function(events){
  //     console.log("Received these events:", events);
  //     calendarEvents = events;
  //   });
  // };
  // var daily = 1000 * 60 * 60 * 24;
  // loadEventsInterval = window.setInterval(loadMyEvents, daily);
  // loadMyEvents();

  // Function to switch slides in a rotation
  var nextSlide = function(){
    $(slides[currentSlide]).hide();

    // Prevent any focus markings
    document.activeElement.blur();

    currentSlide++;
    if (currentSlide === numSlides) {
      currentSlide = 0;
    }

    $(slides[currentSlide]).show();

    window.clearTimeout(slidesTimer);
    if (autoplay) {
      slidesTimer = window.setTimeout(nextSlide, slideDuration);
    }
  };

  // Click handler for manual skipping (good for testing)
  $('body').click(function(){
    nextSlide();
  });

  // Start the rotation
  if (autoplay) {
    slidesTimer = window.setTimeout(nextSlide, slideDuration);
  }
});
