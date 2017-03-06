$(() => {

  // const greeting = 'yo yo';
  // console.log(`${greeting} Guv`);

  const $tagLine1 = $('#tag-line-1');
  console.log($tagLine1.text());

  const listOfModels = ['Huracan', 'Gallardo', 'Enzo', 'La Ferrari', 'Novitec F12', '650S', '488 GTB', '456', 'F12 Berlinetta', 'DB11', 'i8', 'F40', '911 GT3', '918 Spyder', 'R8', 'GTR-Nismo', 'Agera R', 'Veyron', '675LT', 'AMG GTS', 'DB10', 'P1', 'One-77', 'CCR', 'Hennesy Venom GT', 'Pagani Huayra', 'Zenvo ST1', 'Koenigsegg CCX', 'Saleen S7 TT', 'Velur'];

  let currentIndex = 0;

  setInterval(() => {
    console.log(listOfModels[currentIndex]);
    $('#tag-line-1').text(listOfModels[currentIndex]);
    currentIndex++;
    if(currentIndex === listOfModels.length) currentIndex = 0;
  }, 1000);

  // changeTagLine();
  //
  // function changeTagLine() {
  //
  //
  //
  //
  //   // $('#tag-line-1').text(listOfModels[8]);
  //   // tagLine1.text(listOfModels[8]);
  //   // console.log(`drive my ${listOfModels[3]}`);
  //
  //   // setTimeout(function() {
  //   //
  //   //
  //   //   $tagLine1.delay(4000).text(listOfModels[4]);
  //   //   console.log(`drive my ${listOfModels[4]}`);
  //   //
  //   //   $tagLine1.delay(4000).text(listOfModels[10]);
  //   //   console.log(`drive my ${listOfModels[10]}`);
  //   //
  //   // });
  //
  //   // $('#tag-line-1').fadeOut(5000);
  //   // $('#tag-line-1').text(listOfModels[8]);
  //   // $('#tag-line-1').text(listOfModels[7]);
  //   // $('#tag-line-1').text(listOfModels[6]);
  //   // $('#tag-line-1').text(listOfModels[5]);
  //   // $('#tag-line-1').text(`drive my ${listOfModels[i]}`).fadeIn(5000);
  //   // (tagLine1).fadeOut(1000);
  //   // for (var i=0; i<listOfModels.length; i++) {
  //     // $('#tag-line-1').text(`drive my ${listOfModels[i]}`).delay(4000);
  //     // $('#tag-line-1').text(`drive my ${listOfModels[i]}`).delay( 800 );
  //     // $('#tag-line-1').text(`drive my ${listOfModels[i+1]}`).fadeIn( 400 );
  //
  //     // $('#tag-line-1').text(`drive my ${listOfModels[i]}`).fadeTo(2000, .1).fadeTo(2000, 1, changeTagLine);
  //
  //     // console.log(`drive my ${listOfModels[i]}`);
  //   // }
  //
  //
    // setTimeout(function() {
    //   $('#tag-line-1').delay(4000).text(listOfModels[4]);
    //   console.log(`drive my ${listOfModels[4]}`);
    // }, 4000);
  //   //
  //   // setTimeout(function() {
  //   //   $('#tag-line-1').delay(4000).text(listOfModels[10]);
  //   //   console.log(`drive my ${listOfModels[10]}`);
  //   // }, 4000);
  //
  // }
  //

});
