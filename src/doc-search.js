// Back-end
export class DocSearch {
  searchparameters(state,symptoms) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${state}&query=${symptoms}&ski=0&limit=10&user_key=004a80f5404d2972245862bea267d63a`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
//API Key not working in .env =(
