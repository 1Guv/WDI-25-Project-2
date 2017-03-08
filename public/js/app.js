'use strict';

/* global google: true */

$(function () {

  // const greeting = 'yo yo';
  // console.log(`${greeting} Guv`);

  var $input = $('.autocomplete');
  var autocomplete = new google.maps.places.Autocomplete($input[0]);
  autocomplete.addListener('place_changed', function () {
    var $lat = $('input[name=lat]');
    var $lng = $('input[name=lng]');

    var place = autocomplete.getPlace();
    var location = place.geometry.location.toJSON();
    $lat.val(location.lat);
    $lng.val(location.lng);
  });

  var userPostcodesArr = [];

  var users = $('.map1').data('users');
  console.log(users);

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

  if ($('.map1').length) {
    users.forEach(function (user) {
      console.log(user.postcode);
      console.log(user.lat);
      console.log(user.lng);
      userPostcodesArr.push(user.postcode);
      console.log(userPostcodesArr);
    });
  }

  if ($('.map1').length) initMap();

  function initMap() {
    var uluru = { lat: 51.515113, lng: -0.072051 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  // global google  autocomplete

});