var Calculator = require('./../js/galactic-calculator.js').calculatorModule;

$(document).ready(function(){
  $("#check-age").submit(function(e){
    e.preventDefault();

    const ageInput = parseInt($('#age').val());
    let calculator = new Calculator();
    if (ageInput.toString().length <= 3) {
       $(".earth").text("Your age on Earth is: " + ageInput);
     } else if (ageInput.toString().length >= 4) {
       $(".earth").text("Your age on Earth is: " +        calculator.ageCalculator(ageInput));
     }

    $(".mercury").text("Your age on Mercury is: " + calculator.ageOnMercury(ageInput));
    $(".venus").text("Your age on Venus is: " + calculator.ageOnVenus(ageInput));
    $(".mars").text("Your age on Mars is: " + calculator.ageOnMars(ageInput));
    $(".jupiter").text("Your age on Jupiter is: " + calculator.ageOnJupiter(ageInput));

  });
});
