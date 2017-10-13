var Calculator = require('./../js/galactic-calculator.js').calculatorModule;

$(document).ready(function(){
  $("#check-age").submit(function(e){
    e.preventDefault();
    $(".output").removeClass("hide");
    $(".error").addClass("hide");

    const ageInput = parseInt($('#age').val());
    const gender = $('.gender').val();
    let calculator = new Calculator();

    if (ageInput.toString().length <= 3) {
       $(".earth").text("Your age on Earth is: " + ageInput + " and your average life expectancy on Earth is: " + calculator.earthExpectancyCalculator(ageInput, gender));
     } else if (ageInput.toString().length === 4) {
       $(".earth").text("Your age on Earth is: " + calculator.ageCalculator(ageInput) + " and your average life expectancy on Earth is: " + calculator.earthExpectancyCalculator(ageInput, gender));
     } else if (ageInput.toString().length > 4){
       $(".error").text("Please enter a valid age or birth year.");
       $(".output").addClass("hide");
       $(".error").removeClass("hide");
     }

    $(".mercury").text("Your age on Mercury is: " + calculator.ageOnMercury(ageInput) + " and your average life expectancy on Mercury is: " + calculator.mercuryExpectancyCalculator(ageInput, gender));

    $(".venus").text("Your age on Venus is: " + calculator.ageOnVenus(ageInput) + " and your average life expectancy on Venus is: " + calculator.venusExpectancyCalculator(ageInput, gender));

    $(".mars").text("Your age on Mars is: " + calculator.ageOnMars(ageInput) + " and your average life expectancy on Mars is: " + calculator.marsExpectancyCalculator(ageInput, gender));

    $(".jupiter").text("Your age on Jupiter is: " + calculator.ageOnJupiter(ageInput) + " and your average life expectancy on Jupiter is: " + calculator.jupiterExpectancyCalculator(ageInput, gender));

  });
});
