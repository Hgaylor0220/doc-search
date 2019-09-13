import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocSearch } from './doc-search';

$(document).ready(function() {
  $('#submit').click(function() {
    const symptoms = $("#userSymptoms").val();
    const state = $("#userState").val();
    console.log(symptoms,state);
    let results = new DocSearch();
    let promise = results.searchparameters(state,symptoms);  // call the instance method and pass in user input
    console.log(promise);

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.doctor').text( `Displaying a list of locations in ${state} ${body.main.humidity}%`);
      $('.location').text(` and a selection of providers for ${symptoms} ${body.main.temp}`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});



//   let defSearch = new Dictionary();
//   let giphyGenerator = new GiphyGenerator(); // create instance of WeatherService class. Change these values to custom your page.
//   let promise = defSearch.getDefinition(userWord);  // call the instance method and pass in user input.
//
//   promise.then(function(response) {
//     const body = JSON.parse(response);
//     console.log(body);
//
//     //defWords = body[0].meta.syns[0];
//     for(let i=0; i<body.length; i++) {
//       for(let j=0; j<body[i].meta.syns.length; j++) {
//         for(let k=0; k<body[i].meta.syns[j].length; k++) {
//           defWords.push(body[i].meta.syns[j][k]);
//         }
//       }
//     }
//     console.log(defWords);
//
//   }, function(error) {
//     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//   });
//
//   promise.then(function() {
//     $('.giphy').html("");
//     for(let i=0; i<defWords.length; i++) {
//
//       let promise2 = giphyGenerator.searchGifs(defWords[i]);
//
//       promise2.then(function(response) {
//         const body = JSON.parse(response);
//         //target the img value and display with a img src to display
//
//         $('.giphy').append(`<img src=${body.data[0].images.original.url}>`);
//
//
//       }, function(error) {
//         $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//       });
//     }
//
//   }, function(error) {
//     $('.showErrors').text(`There was an error processing your request: ${error.message}`);

//
//
//
