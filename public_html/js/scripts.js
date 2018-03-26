//Slideshow height normalization

function carouselNormalization() {
var items = $('.carousel-item'), //grab all slides
    heights = [], //create empty array to store height values
    tallest; //create variable to make note of the tallest slide

if (items.length) {
    function normalizeHeights() {
        items.each(function() { //add heights to array
            heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    };
    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        tallest = 0, heights.length = 0; //reset vars
        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        });
        normalizeHeights(); //run it again
    });
}
}

function clickHandlers(){
  $('#main-section').on('click', function() {
    return navigateSection(0);
    });
  $('#contact-us').on('click', function() {
    return navigateSection(1);
    });
  $('#about-us').on('click', function() {
    return navigateSection(2);
  });
}

function navigateSection(section){
  $('#section-slider').carousel(section);
}

$(document).ready(function (){
  carouselNormalization();
  $('#section-slider').carousel('pause');
  clickHandlers();
});
