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
=======
  var result
}




var movies = [];


var topUrl = 'https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/25/explicit.json';

function searchTopMovies(){

	fetch(topUrl, {})
	.then(function (response) {
	
    	return response.json();
 	})
	.then(function (data) {
		console.log('top movies----------------------------------------------------------');
    	console.log(data); 
		for(var i = 0; i < data.feed.results.length; i++){
			console.log(data.feed.results[i].name + ' : ' + data.feed.results[i].genres[0].name + ' : ' + data.feed.results[i].releaseDate + ' \n: ' + data.feed.results[i].artworkUrl100);

			var movie = 
			{
				name: data.feed.results[i].name,  
				genre: data.feed.results[i].genres[0].name ,
				release: data.feed.results[i].releaseDate,				
				description: '' ,				
				artUrl: data.feed.results[i].artworkUrl100.replace("100x100", "600x600"),
				trailer: ''
			}
			movies.push(movie);
		}
	});
}




//var searchUrl = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=movie&genreId=4413&limit=25';
var baseSearchUrl = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?media=movie';
var termParameter ='&term=';
var termParameterVal = 'star+wars';
var genreParameter = '&genreId=';
var genreParameterVal = '4413'; 
var limitParameter = '&limit=';
var limitParameterVal = '25';


function searchMovies(movTitle, movGenre, limit){
	var searchUrl = baseSearchUrl;

	if(movTitle){
		searchUrl +=  termParameter + movTitle;
	}else{
		searchUrl +=  termParameter + 'movie';
	}
	if(movGenre){
		searchUrl += genreParameter + movGenre;
	}
	if(limit){
		searchUrl += limitParameter + limit;
	}
	console.log('movie search by: ' + '\ntitle: ' + movTitle + '\ngenre: ' + movGenre + '\nammount: ' + limit + '\n----------------------------------------------------------');
	console.log(searchUrl);

	fetch(searchUrl, {})
	.then(function (response) {
	
    	return response.json();
 	})
	.then(function (data) {
    	console.log(data); 
		
		for(var i = 0; i < data.results.length; i++){
			console.log(data.results[i].trackName + ' : ' + data.results[i].primaryGenreName + ' : ' + data.results[i].releaseDate.slice(0,10) + ' \n: ' + data.results[i].artworkUrl100 + ' \n: ' + data.results[i].previewUrl);
			var movie = 
			{
				name: data.results[i].trackName,  
				genre: data.results[i].primaryGenreName ,
				release: data.results[i].releaseDate.slice(0,9),				
				description: data.results[i].longDescription ,					
				artUrl: data.results[i].artworkUrl100.replace("100x100", "600x600"),
				trailer: data.results[i].previewUrl
			}
			movies.push(movie);
		}
		console.log('-----------------------------');
	});
}

searchTopMovies();
searchMovies('transformers', '', '21');
searchApi('stew', 'beef');

