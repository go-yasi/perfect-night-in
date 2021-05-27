$('select.dropdown')
  .dropdown()
;

var recipePuppyUrl = 'http://www.recipepuppy.com/api/?';
var urlSearchParameter = '&q=';
var urlSearchIngredients = '&i=';


fetch(recipePuppyUrl, {
})
.then(function (response){
  return response.json();
})
.then(function (data){
  console.log(data);
})