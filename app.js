fetch('https://api.api-ninjas.com/v1/quotes?category=movies')
  .then(function (response) {
    let h2 = document.getElementById('main');
    h2.innerText = response.status;
    return response.json();
  }).then(response => {
    console.log(response);
    console.log(response.quotes[0].text)
    let h2 = document.getElementById('main');
    h2.innerText = response.quotes[0].text;
  })
  .catch(function (err) {
    console.log("Something went wrong!", err);
  });