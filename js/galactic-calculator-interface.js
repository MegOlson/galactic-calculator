var Calculator = require('./../js/galactic-calculator.js').calculatorModule;

$(document).ready(function(){
  $("#check-age").submit(function(e){
    e.preventDefault();

    const ageInput = parseInt($('#age').val());
    let calculator = new Calculator();
    // calculator.calculateGalaxyAge(ageInput);

    $(".earth").text("Your age on Earth is: " + ageInput);
    $(".mercury").text("Your age on Mercury is: " + calculator.ageOnMercury(ageInput));
    $(".venus").text("Your age on Venus is: " + calculator.ageOnVenus(ageInput));
    $(".mars").text("Your age on Mars is: " + calculator.ageOnMars(ageInput));
    $(".jupiter").text("Your age on Jupiter is: " + calculator.ageOnJupiter(ageInput));

  });
});
