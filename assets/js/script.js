 //$('select.dropdown')
 //.dropdown()
//;

//replace top variables when done with these values - chgd name 52921
var boredactivitiesURL = "https://www.boredapi.com/api/activity"

var activity = [];

var activityParam = "activity";
var linkParam = "link";
var activityBaseURL = " ";
var urlActivities;
var participantsParam = "participants";
var priceParam = "price";
var typeParam = "type";
var urlActivitiesSearchParameter = '&q=';
var urlActivitiesSearchVal;
var urlActivitiesFormatParameter = '&format=';
var urlActivitiesFormatVal;


var searchActivitiesResults= [];
var resultActivitiesDisplay = document.querySelector("results");



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
    //console.log(recipeResults);
    for (var i = 0;i < 5; i++){
    //  console.log(recipeResults.results[i].ingredients);
    //  console.log(recipeResults.results[i].title);
    //  console.log(recipeResults.results[i].href);
    //  console.log(recipeResults.results[i].thumbnail);
    //  console.log('-----------');

      var searchResults = {
        foodIngredients: recipeResults.results[i].ingredients,
        foodTitles: recipeResults.results[i].title,
        foodLinks: recipeResults.results[i].href,

      }
    searchResults.push(searchResults);
  }
 }); 
urlIngredientsVal = '';
urlSearchVal = '';
//console.log(document.querySelector('.search-param').value)
//console.log(document.querySelector('.search-ingred').value)
 // console.log(queryUrl)
}

function displayResult(){
  

  var resultsEl = document.createElement('');
  resultsEl.className = 'food-result'

  var resultsIngredEl = document.createElement('');
  resultsIngredEl.className = 'food-Ingred'
  resultsIngredEl.textContent = searchResults.foodIngreds;

//   var ;
};


var movies = [];


var topUrl = 'https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/25/explicit.json';

function searchTopMovies(){

fetch(topUrl, {})
.then(function (response) {
	
    	return response.json();
 	})
	.then(function (data) {
		//console.log('top movies----------------------------------------------------------');
    	//console.log(data); 
		for(var i = 0; i < data.feed.results.length; i++){
		//	console.log(data.feed.results[i].name + ' : ' + data.feed.results[i].genres[0].name + ' : ' + data.feed.results[i].releaseDate + ' \n: ' + data.feed.results[i].artworkUrl100);

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



var searchUrl = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=movie&genreId=4413&limit=25';
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
	//console.log('movie search by: ' + '\ntitle: ' + movTitle + '\ngenre: ' + movGenre + '\nammount: ' + limit + '\n----------------------------------------------------------');
	//console.log(searchUrl);

	fetch(searchUrl, {})
	.then(function (response) {
	
    	return response.json();
 	})
	.then(function (data) {
    	//console.log(data); 
		
		for(var i = 0; i < data.results.length; i++){
			//console.log(data.results[i].trackName + ' : ' + data.results[i].primaryGenreName + ' : ' + data.results[i].releaseDate.slice(0,10) + ' \n: ' + data.results[i].artworkUrl100 + ' \n: ' + data.results[i].previewUrl);
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
		//console.log('-----------------------------');
	});
}

searchTopMovies();
searchMovies('transformers', '', '21');
searchApi('stew', 'beef');



//Activities

var activities = [];

function clearContent() { //function to clear results from previous search
  while(resultDisplay.firstChild) {
      resultDisplay.removeChild(resultDisplay.firstChild);
  }
}

//Activities serch function
function searchActivities(event){ //function to be called when search button is clicked
  event.preventDefault(); //prevent form default submit
  clearContent(); //clear previous results from page display
  searchActivitiesResults = []; //clear data from previous search

  //console.log(document.querySelector(".activity").value); //show input value in console
  //console.log(document.querySelector(".link'").value); //show input value in console
  console.log(document.querySelector(".type").value); //show input value in console
  console.log(document.querySelector(".participants").value); //show input value in console
  console.log(document.querySelector(".price").value); //show input value in console
  urlActivitiesSearchVal = document.querySelector(".type").value; //save search input
  urlActivitiesSearchVal = document.querySelector(".participants").value; //save search input
  urlActivitiesSearchVal = document.querySelector(".price").value; //save search input
   
 
 // urlFormatVal = document.querySelector('.select-format').value; //save format input

 // if(!(urlSearchVal === '')){ //if search was inputed and query to url
 //     url = boredURL + particpantsparam;
 // }

 // if(!(urlSearchVal === '')){ //if search was inputed and query to url
 //   url = boredURL + particpantsparam + priceparam;
//}

//if(!(urlActivitiesSearchVal === '')){ //if search was inputed and query to url
//	urlActivities = activityBaseURL +=  urlActivitiesSearchParameter + urlActivitiesSearchVal;
}

// if(!(urlActivitiesFormatParameter === '' || urlActivitiesFormatParameter === 'Example Option')){//if format was inputed and query to url
//	urlActivities = activityBaseURL  += urlActivitiesFormatParameter + urlActivitiesFormatVal;
//}
 // }
//Note:  consider add for loop her to advance through - decide contents??  & create activities object
//for (let i = 0; i < 5; i++) {
 //   searchActivities(); //call activities function
 
//}  could be extra bracket

  console.log(url); //show url in console

function getActivities() { //function to execute fetch
fetch(boredactivitiesURL, {//call to 
  })
   
  .then(function(response) {//first promiste statement
    return response.json(); //data info returned that is  not the values
    })

    .then(function (data) {//second promise statement
    console.log(data); //log data in console
	  console.log(data.activity)
	  console.log(data.type);
	  console.log(data.participants);
	  console.log(data.price);
	  console.log(data.link);

  var activities = {//added 52921
      
      activity: data.activity,
      type: data.type,
      participants: data.participants,
      price: data.price,
      link:  data.link
     }
 //added 52921
  var  activities = ["activitiesParam", "typeParam", "participantsParam", "priceParams", "linkParams" ];

    });

  console.log("test runs");
  
  }

for (let i = 0; i < 5; i++) {
    getActivities(); //call activities function

}

