// $('select.dropdown')
//   .dropdown()
// ;

var recipePuppyUrl = 'https://recipe-puppy.p.rapidapi.com/?';
var urlSearchParameter = '&q=';
var urlIngredientsParameter = '&i=';
var urlIngredientsVal;
var urlSearchVal;
var recipeResults;

function searchApi(search, ingredients){
  // event.preventDefault();

  urlSearchVal = document.querySelector('.search-param').value;
  urlIngredientsVal = document.querySelector('.search-ingred').value;

  if (urlIngredientsVal){
    queryUrl = recipePuppyUrl + urlIngredientsParameter + urlIngredientsVal;
  }
  if (urlSearchVal){
    queryUrl2 = recipePuppyUrl + urlSearchParameter + urlSearchVal;
  }

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": queryUrl, queryUrl2,
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
      console.log('-----------');

      var searchResults = {
        dataIngredients: recipeResults.results[i].ingredients,
        dataTitles: recipeResults.results[i].title,
        dataLinks: recipeResults.results[i].href,
      }
      // searchResults.push(searchResults);
    }
  }); 
  urlIngredientsVal = '';
  urlSearchVal = '';
  // console.log(document.querySelector('.search-param').value)
  // console.log(document.querySelector('.search-ingred').value)
  console.log(queryUrl)
  console.log(queryUrl2)
}

function displayResult(){
  
  var result
}