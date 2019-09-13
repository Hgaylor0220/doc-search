// Back-end

export class GiphyGenerator {
  searchGifs(keyword) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=WA&query=headache&ski=0&limit=10&user_key=${process.env.API_KEY}`; // watch for back ticks.
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

export class Dictionary{
  getDefinition(word) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.OTHER_API_KEY}`;
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
