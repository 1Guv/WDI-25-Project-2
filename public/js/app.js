'use strict';

/* global google: true */

$(function () {

  // Google Address Autocomplete
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

  var map = null;
  var infowindow = null;

  // Gets the object called Users from the db
  var users = $('.map1').data('users');
  console.log(users);

  // gets the tagline on the homepage
  var $tagLine1 = $('#tag-line-1');
  console.log($tagLine1.text());

  // used to go throught the lostofmodels array
  var currentIndex = 0;

  var listOfModels = ['Huracan', 'Gallardo', 'Enzo', 'La Ferrari', 'Novitec F12', '650S', '488 GTB', '456', 'F12 Berlinetta', 'DB11', 'i8', 'F40', '911 GT3', '918 Spyder', 'R8', 'GTR-Nismo', 'Agera R', 'Veyron', '675LT', 'AMG GTS', 'DB10', 'P1', 'One-77', 'CCR', 'Hennesy Venom GT', 'Pagani Huayra', 'Zenvo ST1', 'Koenigsegg CCX', 'Saleen S7 TT', 'Velur'];

  function tagLineRotation() {
    setInterval(function () {
      // console.log(listOfModels[currentIndex]);

      $('#tag-line-1').text(listOfModels[currentIndex]);
      currentIndex++;

      if (currentIndex === listOfModels.length) currentIndex = 0;
    }, 2000);

    // $('a').click(function(){
    //   $('html, body').animate({
    //     scrollTop: $( $(this).attr('href') ).offset().top
    //   }, 500);
    //   return false;
    // });
  }

  // goes throught the users object to get the postcode then use geoloacter to convert to lat and long, however used Google address autocomplate instead to convert address into lat & lng automatically from the registrationpage and store in the database


  if ($('.map1').length) initMap();

  function initMap() {
    var london = { lat: 51.515113, lng: -0.072051 };

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: london
    });

    new google.maps.Marker({
      position: london,
      map: map
    });

    addMarkers();
  }

  function addMarkers() {
    users.forEach(function (user) {
      addMarker(user);
    });
  }

  function addMarker(user) {
    // const latLng = latLng;
    var image = 'http://www.apnaplates.com/app/webroot/GSS/test/ferrari-badge-small-4.png';
    var latLng = { lat: user.lat, lng: user.lng };
    console.log(latLng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image
    });

    marker.addListener('click', function () {
      markerClick(marker, user);
    });
  }

  function markerClick(marker, user) {
    if (infowindow) infowindow.close();

    console.log(user);

    infowindow = new google.maps.InfoWindow({
      content: '\n      <div class="infowindow">\n        <a href="/users/' + user._id + '"><h3>' + user.username + '</h3></a>\n      </div>\n      '
    });

    infowindow.open(map, marker);
  }

  // functions to run
  tagLineRotation();
});