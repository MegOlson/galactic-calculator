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
       $(".earth").text("Your age on Earth is: " + ageInput);
     } else if (ageInput.toString().length === 4) {
       $(".earth").text("Your age on Earth is: " +        calculator.ageCalculator(ageInput));
     } else if (ageInput.toString().length > 4){
       $(".error").text("Please enter a valid age or birth year.");
       $(".output").addClass("hide");
       $(".error").removeClass("hide");
     }

    $(".gender").text("You are: " + gender);
    $(".mercury").text("Your age on Mercury is: " + calculator.ageOnMercury(ageInput));
    $(".venus").text("Your age on Venus is: " + calculator.ageOnVenus(ageInput));
    $(".mars").text("Your age on Mars is: " + calculator.ageOnMars(ageInput));
    $(".jupiter").text("Your age on Jupiter is: " + calculator.ageOnJupiter(ageInput));

  });
});
