//$('select.dropdown')
//.dropdown()
//;

var searchActivitiesResults = [];
var resultActivitiesDisplay = document.querySelector("results");



var searchUrl = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=movie&genreId=4413&limit=25';
var baseSearchUrl = 'https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?media=movie';
var termParameter = '&term=';
var termParameterVal = 'star+wars';
var genreParameter = '&genreId=';
var genreParameterVal = '4413';
var limitParameter = '&limit=';
var limitParameterVal = '25';

var boredUrl = "";
var baseUrl = "https://www.boredapi.com/api/activity/?";
var activityParam = "activity";
var typeParam = "&type=";
var participantsParam = "&participants=";
var priceParam = "&maxprice=";
var linkParam = "link";
var activities = [];


var recipePuppyUrl = 'https://recipe-puppy.p.rapidapi.com/?';
var queryUrl = '';
var foodResults = [];
var urlSearchParameter = '&q=';
var urlIngredientsParameter = 'i=';
var urlIngredientsVal;
var urlSearchVal;
var recipeResults;

var userInputs = ['', '', '', '', '', '', ''];

var foodDivEL = document.querySelector('#food-div');
var movieDivEL = document.querySelector('#movie-div');

function clearContent(clear) { //function to clear results from previous search
  while(clear.firstChild) {
      clear.removeChild(clear.firstChild);
  }
}

function getFoodParams(){
  userInputs[0] = document.querySelector('.search-param').value.replace(" ", "") ;
  userInputs[1] = document.querySelector('.search-ingred').value.replace(" ", ",") ;
}


function getActivitiesParams(){
  userInputs[4] = document.querySelector('.activity-type').value;
  userInputs[5] = document.querySelector('.activity-participants').value;
  userInputs[6] = document.querySelector('.activity-price').value;

 if (userInputs[6] ==="free"){
   userInputs[6] = 0;
 }
 if (userInputs[6] ==="$"){
  userInputs[6] = .5;
 }
 if (userInputs[6] ==="$$"){
  userInputs[6] = 1;
 }
 if (userInputs[6] ==="Select price range"){
  userInputs[6] = 1;
 } 
}
 


function searchActivities(activType, activParticipants, activPrice){
 boredURL = baseUrl;

  if (activType) {
    boredURL += typeParam + activType;
  }
  if (activParticipants) {
    boredURL += participantsParam + activParticipants;
}
if (activPrice) {
   boredURL += priceParam + activPrice;
}
console.log(boredURL);
}

function getActivities() {
    searchActivities(userInputs[4], userInputs[5],userInputs[6]);
  // statement looping through activities  
  for (let i = 0; i < 5; i++) {
    fetch(boredURL, {
    })
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        //console.log(data);

        //console.log("data");


  //urlSearchVal = document.querySelector('.search-param').value.replace(" ", "") ;
  //urlIngredientsVal = document.querySelector('.search-ingred').value.replace(" ", ",") ;
  //urlSearchVal = search;
  //urlIngredientsVal = ingredients;
        // local object named activities results - 5 properties
        var activitiesResults = {

          activity: data.activity,
          type: data.type,
          participants: data.participants,
          price: data.price,
          link: data.link,
        }
        //logging data
        console.log(activitiesResults);

        //adding items to array
        activities.push(activitiesResults);


       

      });

  }
  console.log(activities);
  
  var timeout = setTimeout(displayActivities,5000); // calling display function
  
}

//calling function
//getActivities();

//create a contaiauber for the display
function displayActivities() {

  for (var i = 0; i < 5; i++) {
    var activitydetailResultsEL = document.createElement('div');

    var activityactivityEL = document.createElement('p');
    activityactivityEL.className = " "; //CSS Class 
    activityactivityEL.textContent = activities[i].activity;

    var activitytypeEL = document.createElement('p');
    activitytypeEL.className = " "; //CSS Class 
    activitytypeEL.textContent = activities[i].type;

    var activityparticipantEL = document.createElement('p');
    activityparticipantEL.className = " "; //CSS Class 
    activityparticipantEL.textContent = activities[i].participant;

    var activitypriceEL = document.createElement('p');
    activitypriceEL.className = " "; //CSS Class 
    activitypriceEL.textContent = activities[i].price;

    var activitylinkEL = document.createElement('a');
    activitylinkEL.className = " "; //CSS Class 
    activitylinkEL.setAttribute = ("href", activities.link);
    activitylinkEL.textContent = activities[i].link;
    //console.log(activities.link);

    activitydetailResultsEL.appendChild(activityactivityEL);
    activitydetailResultsEL.appendChild(activitytypeEL);
    activitydetailResultsEL.appendChild(activityparticipantEL);
    activitydetailResultsEL.appendChild(activitypriceEL);
    activitydetailResultsEL.appendChild(activitylinkEL);

    document.querySelector("#activities-div").appendChild(activitydetailResultsEL);

  }
}


//function searchApi(search, ingredients) {
//  var startBtn = document.querySelector('.start-btn');


  function searchFood(search, ingredients) {
    // event.preventDefault();


    //urlSearchVal = document.querySelector('.search-param').value.replace(" ", "");
    //urlIngredientsVal = document.querySelector('.search-ingred').value.replace(" ", ",");

    urlSearchVal = search;
    urlIngredientsVal = ingredients;


    queryUrl = recipePuppyUrl;
    
    foodResults = [];


    if (urlIngredientsVal) {
      queryUrl += urlIngredientsParameter + urlIngredientsVal;
    }
    if (urlSearchVal) {
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
    for (var i = 0; i < 5; i++) {
      //  console.log(recipeResults.results[i].ingredients);
      //  console.log(recipeResults.results[i].title);
      //  console.log(recipeResults.results[i].href);
      //  console.log(recipeResults.results[i].thumbnail);
      //  console.log('-----------');

      var foodResult = {
        foodTitles: recipeResults.results[i].title,
        foodIngredients: recipeResults.results[i].ingredients,
        foodLinks: recipeResults.results[i].href,
        foodPic: recipeResults.results[i].thumbnail,
      }
      foodResults.push(foodResult);
    }
    displayFood();
  });
  urlIngredientsVal = '';
  urlSearchVal = '';
  // console.log(document.querySelector('.search-param').value)
  // console.log(document.querySelector('.search-ingred').value)
  console.log(foodResults);

}


function displayFood() {

  for (var i = 0; i < 5; i++) {
    var resultsEl = document.createElement('div');
    resultsEl.className = 'food-result' // or which ever class you Preffer

    var resultsTitleEl = document.createElement('h5');
    resultsTitleEl.className = 'food-title' // or which ever class you Preffer
    resultsTitleEl.textContent = foodResults[i].foodTitles;

    var resultsIngredEl = document.createElement('p');
    resultsIngredEl.className = 'food-Ingred' // or which ever class you Preffer
    resultsIngredEl.textContent = foodResults[i].foodIngredients;

    var resultsLinksEl = document.createElement('a');
    resultsLinksEl.className = 'food-links' // or which ever class you Preffer
    resultsLinksEl.setAttribute('href', foodResults[i].foodLinks);
    resultsLinksEl.textContent = "View Recipe";
    // console.log(foodResults[i].foodLinks);

    var resultsPicEl = document.createElement('img')
    resultsPicEl.className = 'food-pic' // or which ever class you Preffer
    resultsPicEl.src = foodResults[i].foodPic;
    resultsPicEl.setAttribute('width', '150px');
    resultsPicEl.setAttribute('height', '150px');
    if (foodResults[i].foodPic === ""){
      resultsPicEl.src = "../assets/images/good-food.jpeg"
    }

    resultsEl.appendChild(resultsPicEl);
    resultsEl.appendChild(resultsTitleEl);
    resultsEl.appendChild(resultsIngredEl);
    resultsEl.appendChild(resultsLinksEl);

    document.querySelector("#food-div").appendChild(resultsEl);
  }
}


var movies = [];


var topUrl = 'https://cors-anywhere.herokuapp.com/https://rss.itunes.apple.com/api/v1/us/movies/top-movies/all/25/explicit.json';

function searchTopMovies() {

  fetch(topUrl, {})
    .then(function (response) {

      return response.json();
    })
    .then(function (data) {
      //console.log('top movies----------------------------------------------------------');
      //console.log(data); 
      for (var i = 0; i < data.feed.results.length; i++) {
        console.log(data.feed.results[i].name + ' : ' + data.feed.results[i].genres[0].name + ' : ' + data.feed.results[i].releaseDate + ' \n: ' + data.feed.results[i].artworkUrl100.replace("200x200", "600x600"));

        var movie =
        {
          name: data.feed.results[i].name,
          genre: data.feed.results[i].genres[0].name,
          release: data.feed.results[i].releaseDate,
          description: '',
          artUrl: data.feed.results[i].artworkUrl100.replace("200x200", "600x600"),
          trailer: ''
        }
        movies.push(movie);
      }
    });
}




function searchMovies(movTitle, movGenre, limit){
	var searchUrl = baseSearchUrl;
  movies = [];

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
			//console.log(data.results[i].trackName + ' : ' + data.results[i].primaryGenreName + ' : ' + data.results[i].releaseDate.slice(0,10) + ' \n: ' + data.results[i].artworkUrl100.replace("100x100", "600x600") + ' \n: ' + data.results[i].previewUrl);
			var movie = 
			{
				name: data.results[i].trackName,  
				genre: data.results[i].primaryGenreName ,
				release: data.results[i].releaseDate.slice(0,10),				
				//description: data.results[i].longDescription ,					
				artUrl: data.results[i].artworkUrl100.replace("100x100", "600x600"),
				trailer: data.results[i].previewUrl
			}
			movies.push(movie);
		}
		//console.log('-----------------------------');
    displayMovies();
	});
}




function displayMovies() {
  //console.log(movies)
  for (var i = 0; i < 5; i++) {
    var movResultDivEL = document.createElement('div');
    movResultDivEL.className = 'movie-result';

    var movTitleEL = document.createElement('h5');
    movTitleEL.textContent = movies[i].name;
    movTitleEL.className = 'movie-title';

    var movGenreEL = document.createElement('p');
    movGenreEL.textContent = movies[i].genre;
    movGenreEL.className = 'movie-genre';//CSS CLASS

    var movDateEL = document.createElement('p');
    movDateEL.textContent = movies[i].release;
    movDateEL.className = 'movie-date';//CSS CLASS

    var movImgEL = document.createElement('img');
    movImgEL.src = movies[i].artUrl;
    movImgEL.className = 'movie-poster'; //CSS CLASS

    movResultDivEL.appendChild(movImgEL);
    movResultDivEL.appendChild(movTitleEL);
    movResultDivEL.appendChild(movGenreEL);
    movResultDivEL.appendChild(movDateEL);

    document.querySelector("#movie-div").appendChild(movResultDivEL); //change where its displayed
  }
}

var searchBtn = document.querySelector('#searchBtn');

var searchMovListener = function () {
  var userTitleInput = document.querySelector('.movTitleInput').value;

  var userGenreInput = document.querySelector('.movGenreInput').value;
  
  if(userGenreInput === 'Select Genre'){
    userGenreInput = '';
  }else if(userGenreInput === 'action'){
    userGenreInput = '4401';
  }else if(userGenreInput === 'comedy'){
    userGenreInput = '4404';
  }else if(userGenreInput === 'drama'){
    userGenreInput = '4406';
  }else if(userGenreInput === 'horror'){
    userGenreInput = '4408';
  }else if(userGenreInput === 'kids'){
    userGenreInput = '4410';
  }else if(userGenreInput === 'romance'){
    userGenreInput = '4412';
  }else if(userGenreInput === 'scifi'){
    userGenreInput = '4413';
  }else if(userGenreInput === 'thriller'){
    userGenreInput = '4416';
  }


  userInputs[2] = userGenreInput;
  userInputs[3] = userTitleInput;
};

function clickSearch(){
  console.log("yay!");
  window.location.replace('../html/results.html');
  console.log('hi');

  searchMovListener();
  getFoodParams();
  getActivitiesParams();

  console.log('movies:');
  console.log(movies);
  //console.log(movies.length);
  console.log('foods:');
  console.log(foodResults);
  //console.log(foodResults.length);
  console.log(userInputs);


  console.log(JSON.stringify(movies));


  localStorage.setItem('inputs', JSON.stringify(userInputs));

}

function searchResults(){
  userInputs = JSON.parse(localStorage.getItem('inputs'));
  console.log(userInputs);
  searchFood(userInputs[0], userInputs[1]);
  searchMovies(userInputs[3], userInputs[2], '20');
  getActivities();
}

if(document.title === 'Let\'s Plan!'){
  searchBtn.addEventListener('click', clickSearch);
  console.log('form page');
}

if(document.title === 'This is Your Perfect Night In'){
  console.log('results page');
  searchResults();
}


var restartBtn = document.querySelector('#restart-btn'); 

restartBtn.addEventListener('click', function (){
  window.location.replace('../html/search-form.html');
})