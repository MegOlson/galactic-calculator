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

  it('should return users age based on their dob', function(){
    expect(calculator.ageCalculator(1997)).toEqual(20)
  });

  it('should return users Mercury age based on their age on earth', function(){
    expect(calculator.ageOnMercury(20)).toEqual(83)
  });

  it('should return users Venus age based on their age on earth', function(){
    expect(calculator.ageOnVenus(20)).toEqual(32)
  });

  // it('should return users Mars age based on their age on earth', function(){
  //   expect(calculator.ageOnMars(20)).toEqual(10)
  // });
  //
  // it('should return users Jupiter age based on their age on earth', function(){
  //   expect(calculator.ageOnJupiter(20)).toEqual(1)
  // });


});
