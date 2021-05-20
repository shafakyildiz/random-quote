fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
  .then(function(response) {
    console.log(response);
    let h2 = document.getElementById('main');
    h2.innerText = response.status;
  })
  .catch(function(err) {
    console.log("Something went wrong!", err);
  });

