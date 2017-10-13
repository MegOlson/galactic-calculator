class Calculator {
  constructor(){
    this.maleExpectancy = 76;
    this.femaleExpectancy = 81;
  }

  // ageToSeconds(age) {
  //   let ageInSeconds = age * (31556952);
  //   return ageInSeconds;
  // }

  ageCalculator(birthYear) {
    let today = new Date();
    let currentYear = today.getFullYear();
    let age = currentYear - birthYear;
    return age;
  }

  ageOnMercury(age) {
    let mercuryAge = age / .24;
    mercuryAge = Math.floor(mercuryAge);
    return mercuryAge;
  }

  ageOnVenus(age) {
    let venusAge = age / .62;
    venusAge = Math.floor(venusAge);
    return venusAge;
  }

  ageOnMars(age) {
    let marsAge = age / 1.88;
    marsAge = Math.floor(marsAge);
    return marsAge;
  }

  ageOnJupiter(age) {
    let jupiterAge = age / 11.86;
    jupiterAge = Math.floor(jupiterAge);
    return jupiterAge;
  }

  earthExpectancyCalculator(age, gender) {
    if (gender === "female") {
      var timeLeftonEarth = this.femaleExpectancy - age;
    } else {
      var timeLeftonEarth = this.maleExpectancy - age;
    }
    return timeLeftonEarth;
  }

  mercuryExpectancyCalculator(age, gender) {
    let mercuryFemaleExpectancy = this.femaleExpectancy / .24;
    mercuryFemaleExpectancy = Math.floor(mercuryFemaleExpectancy);

    let mercuryMaleExpectancy = this.maleExpectancy / .24;
    mercuryMaleExpectancy = Math.floor(mercuryMaleExpectancy);

    let mercuryAge = age / .24;
    mercuryAge = Math.floor(mercuryAge);

    if (gender === "female") {
      var timeLeftonMercury = mercuryFemaleExpectancy - mercuryAge;
    } else {
      var timeLeftonMercury = mercuryFemaleExpectancy - mercuryage;
    }
    return timeLeftonMercury;
  }

  venusExpectancyCalculator(age, gender) {
    if (gender === "female") {
      var timeLeftonEarth = this.femaleExpectancy - age;
    } else {
      var timeLeftonEarth = this.maleExpectancy - age;
    }
    return timeLeftonEarth;
  }

  marsExpectancyCalculator(age, gender) {
    if (gender === "female") {
      var timeLeftonEarth = this.femaleExpectancy - age;
    } else {
      var timeLeftonEarth = this.maleExpectancy - age;
    }
    return timeLeftonEarth;
  }

  jupiterExpectancyCalculator(age, gender) {
    if (gender === "female") {
      var timeLeftonEarth = this.femaleExpectancy - age;
    } else {
      var timeLeftonEarth = this.maleExpectancy - age;
    }
    return timeLeftonEarth;
  }
}

exports.calculatorModule = Calculator;
