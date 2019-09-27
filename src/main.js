import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocSearch } from './doc-search';

$(document).ready(function() {
  $('#submit').click(function() {
    const symptoms = $("#userSymptoms").val();
    const state = $("#userState").val();



    let docSearch = new DocSearch();
    let promise = docSearch.searchparameters(state,symptoms);  // call the instance method and pass in user input

    promise.then(function(response) {
      $('#searchResults').show();
      $('#searchResults .message').html('Displaying a list of providers in ' + state + ' specializing with ' + symptoms + ' .')
      const body = JSON.parse(response);

      // Iterate over each profile.
      for(let counter = 0; counter < 5; counter++) {
        var rowOutput = '';

        if (body.data[counter] != undefined) {
          var doctor = body.data[counter];

          // Get doctor full name name
          var name = doctor.profile.first_name + ' ' + doctor.profile.last_name;
          rowOutput = '<li>' + name;

          // Generate list of locations
          if (Array.isArray(doctor.practices)) {
            rowOutput += '<ul><li>Locations<ul>'

            doctor.practices.forEach(function(location) {
              // console.log(location)
              console.log(location);
              var addressData = location.visit_address

              rowOutput += '<li>' + addressData.street + ' ' + addressData.city
                +  ' ' + addressData.state  + '</li>';
            });

            rowOutput += '</ul></li></ul>'

          }
          rowOutput += '</li>';

          $('#searchResults > ul').append(rowOutput);
        }
      }
    });
  });
});

// (function(error) {
//   $('.showErrors').text('There was an error processing your request: ${error.message}');
// });
