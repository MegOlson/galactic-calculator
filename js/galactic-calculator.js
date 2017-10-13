class Calculator {
  constructor(){
    // this.earthYears;
    // this.murceryYears;
    // this.vensusYears;
    // this.marsYears;
    // this.jupiterYears;
    //
  }

  ageToSeconds(age) {
    let ageInSeconds = age * (31556952);
    return ageInSeconds;
  }
}

exports.calculatorModule = Calculator;
