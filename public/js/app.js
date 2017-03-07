'use strict';

$(function () {

  // const greeting = 'yo yo';
  // console.log(`${greeting} Guv`);

  var $tagLine1 = $('#tag-line-1');
  console.log($tagLine1.text());

  var listOfModels = ['Huracan', 'Gallardo', 'Enzo', 'La Ferrari', 'Novitec F12', '650S', '488 GTB', '456', 'F12 Berlinetta', 'DB11', 'i8', 'F40', '911 GT3', '918 Spyder', 'R8', 'GTR-Nismo', 'Agera R', 'Veyron', '675LT', 'AMG GTS', 'DB10', 'P1', 'One-77', 'CCR', 'Hennesy Venom GT', 'Pagani Huayra', 'Zenvo ST1', 'Koenigsegg CCX', 'Saleen S7 TT', 'Velur'];

  var currentIndex = 0;

  setInterval(function () {
    // console.log(listOfModels[currentIndex]);
    $('#tag-line-1').text(listOfModels[currentIndex]);
    currentIndex++;
    if (currentIndex === listOfModels.length) currentIndex = 0;
  }, 500);

  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });
});