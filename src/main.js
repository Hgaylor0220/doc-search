import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocSearch } from './doc-search';

$(document).ready(function() {
  $('#submit').click(function() {
    const symptoms = $("#userSymptoms").val();
    const state = $("#userState").val();
    let providerInfo=[];


    let results = new DocSearch();
    let promise = results.searchparameters(state,symptoms);  // call the instance method and pass in user input


    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      for(let i=0; i < 5; i++) {
        providerInfo = body.data[].profile.forEach(function(doctor)
          console.log(providerInfo);
          //gather provider info based on users search selection
        //display each provider info to the user

          $('.doctor').html( `Displaying a list of providers in ${state},${body.data[].profile}`);
          $('.providerLocation').text("")


            (function(error) {
              $('.showErrors').text(`There was an error processing your request: ${error.message}`);
            })
          })
        }
      })
    })
  });
