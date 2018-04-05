// Main Script
// ============================================================

$(document).ready(function () {

  window.sr = ScrollReveal();
  sr.reveal('.js-reveal', {
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    duration: 1000,
    delay: 300,
  }, 50);

  $('.js-slide-toggle').click(function() {
     $('body').toggleClass("is-slide-active");
  });
  $('.js-slide-close').click(function() {
     $('body').toggleClass("is-slide-active");
  });

});
