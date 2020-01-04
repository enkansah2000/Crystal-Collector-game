$(document).ready(function(){
        
    //creates random number between 19-120
var randNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

//Print random number to the Dom
 $('.ranNumBox').html(randNum);

$('.box').on('click' ,function(){

  $(this).attr('value', randNum);  
var demo = $(this).attr('value', randNum); 
var test = $(this).attr('value');
console.log(test);   
});




});