const url = "https://api.api-ninjas.com/v1/quotes?category=movies";

fetchQuote();

function fetchQuote() {
  fetch(url, {
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "PJAAKHnO8WYE17tFKMTM1A==762bz2jOUe8aO8p1"
    }
  })
    .then(resp => resp.json())
    .then(function (data) {
      console.log(data[0]);
      let quote = data[0];
      let quoteText = document.getElementById('text');
      quoteText.innerText = quote.quote;
      let authorText = document.getElementById('author');
      authorText.innerText = quote.author;
    })
    .catch(function (error) {
      console.log(error);
    });
}