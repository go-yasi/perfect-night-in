/*
$('select.dropdown')
  .dropdown()
;
*/



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

searchTopMovies();


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
searchMovies('transformers', '', '21');