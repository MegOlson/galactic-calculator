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

  ageCalculator(birthYear) {
    let today = new Date();
    let currentYear = today.getFullYear();
    let age = currentYear - birthYear;
    return age;
  }

  everything(ageInput) {
    if (ageInput.toString().length === 2) {
      this.ageToSeconds(ageInput);
    } else {
      this.ageCalculator(ageInput);
    }
  }
}

exports.calculatorModule = Calculator;
