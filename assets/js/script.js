// $('select.dropdown')
//   .dropdown()
// ;
// var boredURL = "https://www.boredapi.com/api/activity"
// var typeparam = 'type';
// var participantparm = 'participants';
// var priceparam = 'price';

var recipePuppyUrl = 'https://recipe-puppy.p.rapidapi.com/?';
var queryUrl = '';
var urlSearchParameter = '&q=';
var urlIngredientsParameter = '&i=';
var urlIngredientsVal;
var urlSearchVal;
var recipeResults;

function searchApi(search, ingredients){
  // event.preventDefault();

  urlSearchVal = document.querySelector('.search-param').value;
  urlIngredientsVal = document.querySelector('.search-ingred').value;

  queryUrl = recipePuppyUrl;

  if (urlIngredientsVal){
    queryUrl += urlIngredientsParameter + urlIngredientsVal;
  }
  if (urlSearchVal){
    queryUrl += urlSearchParameter + urlSearchVal;
  }

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": queryUrl,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "e76ab8933bmshcae33a8866e9a33p11278djsn85f0c5eca5f8",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
    }
  };
  $.ajax(settings).done(function (response) {
    // console.log(JSON.parse(response));
    recipeResults = JSON.parse(response);
    console.log(recipeResults);
    for (var i = 0;i < 5; i++){
      console.log(recipeResults.results[i].ingredients);
      console.log(recipeResults.results[i].title);
      console.log(recipeResults.results[i].href);
      console.log(recipeResults.results[i].thumbnail);
      console.log('-----------');

      var searchResults = {
        foodIngredients: recipeResults.results[i].ingredients,
        foodTitles: recipeResults.results[i].title,
        foodLinks: recipeResults.results[i].href,
      }
      // searchResults.push(searchResults);
    }
  }); 
  urlIngredientsVal = '';
  urlSearchVal = '';
  // console.log(document.querySelector('.search-param').value)
  // console.log(document.querySelector('.search-ingred').value)
  console.log(queryUrl)
}

function displayResult(){
  
  var resultsEl = document.createElement('');
  resultsEl.className = 'food-result'

  var resultsIngredEl = document.createElement('');
  resultsIngredEl.className = 'food-Ingred'
  resultsIngredEl.textContent = searchResults.foodIngreds;

  // var ;
};


// function getActivities() {
// fetch(boredURL, {
// })

//   .then(function(response){
//     return response.json();
//     })

//     .then(function (data){
//       console.log(data);
//     });
//  console.log("test runs"); 
// }

// for (let i = 0; i < 5; i++) {
//   getActivities();
  
// }
