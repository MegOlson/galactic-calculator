var Calculator = require('./../js/galactic-calculator.js').calculatorModule;

$(document).ready(function(){
  $("#check-age").submit(function(e){
    e.preventDefault();
    $(".output").removeClass("hide");
    $(".error").addClass("hide");
    $(".tooOld").addClass("hide");

    const ageInput = parseInt($('#age').val());
    const gender = $('.gender').val();
    let calculator = new Calculator();

    if (!ageInput) {
      $(".error").removeClass("hide");
      $(".error").text("Please your age.");
    }

    if (ageInput.toString().length <= 3) {
       $(".earth").text("Your age on Earth is: " + ageInput));
       $(".earthFuture").text(" Your average life expectancy on Earth is: " + calculator.earthExpectancyCalculator(ageInput, gender));
     } else if (ageInput.toString().length === 4) {
       $(".earth").text("Your age on Earth is: " + calculator.ageCalculator(ageInput));
       $(".earthFuture").text(" Your average life expectancy on Earth is: " + calculator.earthExpectancyCalculator(ageInput, gender));
     } else if (ageInput.toString().length > 4){
       $(".error").text("Please enter a valid age.");
       $(".output").addClass("hide");
       $(".error").removeClass("hide");
     }

     $(".mercury").text("Your age on Mercury is: " + calculator.ageOnMercury(ageInput));
     $(".venus").text("Your age on Venus is: " + calculator.ageOnVenus(ageInput));
     $(".mars").text("Your age on Mars is: " + calculator.ageOnMars(ageInput));
     $(".jupiter").text("Your age on Jupiter is: " + calculator.ageOnJupiter(ageInput));

     if (ageInput > 81 && gender === "Female" || ageInput > 76 && gender === "Male"){
       $(".tooOld").removeClass("hide");
       $(".tooOld").text("You have surpassed the average life expectancy of your demographic. Live it up! Who knows how much longer you've got!")
       $(".output").addClass("hide");
     }
     else if (ageInput <= 81 && gender === "Female" || ageInput <= 76 && gender === "Male") {
       $(".mercuryFuture").text("Your average life expectancy on Mercury is: " + calculator.mercuryExpectancyCalculator(ageInput, gender));
       $(".venusFuture").text("Your average life expectancy on Venus is: " + calculator.venusExpectancyCalculator(ageInput, gender));
       $(".marsFuture").text("Your average life expectancy on Mars is: " + calculator.marsExpectancyCalculator(ageInput, gender));
       $(".jupiterFuture").text("Your average life expectancy on Jupiter is: " + calculator.jupiterExpectancyCalculator(ageInput, gender));
     }
  });
});
