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


});
