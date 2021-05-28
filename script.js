// $('select.dropdown')
// .dropdown()
// ;

var boredURL = "https://www.boredapi.com/api/activity"

var activityparam = "activity";
//var linkparam = "link";
var url;
var participantsparam = "participants";
var priceparam = "price";
var typeparam = "type";
var urlSearchParameter = '&q=';
var urlSearchVal;
var urlFormatParameter = '&format=';
//var urlFormatVal;

var searchResults= [];
var resultDisplay = document.querySelector("results");


function clearContent() { //function to clear results from previous search
  while(resultDisplay.firstChild) {
      resultDisplay.removeChild(resultDisplay.firstChild);
  }
}


function search(event){ //function to be called when search button is clicked
  event.preventDefault(); //prevent form default submit
  clearContent(); //clear previous results from page display
  searchResults= []; //clear data from previous search

  //console.log(document.querySelector(".activity").value); //show input value in console
  //console.log(document.querySelector(".link'").value); //show input value in console
  console.log(document.querySelector(".type").value); //show input value in console
  console.log(document.querySelector(".participants").value); //show input value in console
  console.log(document.querySelector(".price").value); //show input value in console
  urlSearchVal = document.querySelector(".type").value; //save search input
  urlSearchVal = document.querySelector(".participants").value; //save search input
  urlSearchVal = document.querySelector(".price").value; //save search input
   
 
 // urlFormatVal = document.querySelector('.select-format').value; //save format input

 // if(!(urlSearchVal === '')){ //if search was inputed and query to url
 //     url = boredURL + particpantsparam;
 // }

 // if(!(urlSearchVal === '')){ //if search was inputed and query to url
 //   url = boredURL + particpantsparam + priceparam;
//}

if(!(urlSearchVal === '')){ //if search was inputed and query to url
  url = boredURL + particpantsparam + priceparam + typeparam;
}

 // if(!(urlFormatVal === '' || urlFormatVal === 'Example Option')){//if format was inputed and query to url
 //     url = baseUrl + urlFormatParameter + urlFormatVal;
  }

  console.log(url); //show url in console

function getActivities() { //function to execute fetch
fetch(boredURL, {
  })
   
  .then(function(response) {
    return response.json(); //data info returned that is  not the values
    })

    .then(function (data) {
      console.log(data); //log data in console
    });

      console.log("test runs");
  
  }

for (let i = 0; i < 5; i++) {
    getActivities(); //obtain and display activities
 
}

