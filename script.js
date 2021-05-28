// $('select.dropdown')
// .dropdown()
// ;

var boredURL = "https://www.boredapi.com/api/activity"
var typeparam = 'type';
var participantparm = 'participants';
var priceparam = 'price';

function getActivities() {
fetch(boredURL, {
})

  .then(function(response){
    return response.json();
    })

    .then(function (data){
      console.log(data);
    });
 console.log("test runs"); 
}

for (let i = 0; i < 5; i++) {
  getActivities();
  
}






    
    
