$(document).ready(function() {

  $("#enter").click(function () { 
    var i = $("#input").val(); 
    if (i == ''  || isNaN(i) ){ 
        $("#answer").text("Please enter a number"); 
      return;    
    } 
    var number = ''; 
    number += (i % 3 === 0) ? 'Fizz' : ''; 
    number += (i % 5 === 0) ? 'Buzz' : ''; 
    number = (number === '') ? i : number; 
    $("#answer").text(number); 
  });
  
});

