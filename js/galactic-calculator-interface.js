var Calculator = require('./../js/galactic-calculator.js').calculatorModule;

$(document).ready(function(){
  $("#check-age").submit(function(e){
    e.preventDefault();

    const ageInput = parseInt($('#age').val());
    let calculator = new Calculator();

    $(".age-in-seconds").text(calculator.ageToSeconds(ageInput));

  });
});
