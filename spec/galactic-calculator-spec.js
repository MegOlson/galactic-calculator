// import { AgeCalculator } from './../js/galactic-calculator.js';
var Calculator = require('./../js/galactic-calculator.js').calculatorModule;


describe ('Calculator', function(){
  let calculator;

  beforeEach(function(){
    calculator = new Calculator()
  });

  it('should return users age in seconds', function(){
    expect(calculator.ageToSeconds(20)).toEqual(631139040)
  });

});
