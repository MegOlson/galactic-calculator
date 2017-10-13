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
    let venusFemaleExpectancy = this.femaleExpectancy / .62;
    venusFemaleExpectancy = Math.floor(venusFemaleExpectancy);

    let venusMaleExpectancy = this.maleExpectancy / .62;
    venusMaleExpectancy = Math.floor(venusMaleExpectancy);

    let venusAge = age / .62;
    venusAge = Math.floor(venusAge);

    if (gender === "female") {
      var timeLeftonVenus = venusFemaleExpectancy - venusAge;
    } else {
      var timeLeftonVenus = venusFemaleExpectancy - venusage;
    }
    return timeLeftonVenus;
  }

  marsExpectancyCalculator(age, gender) {
    let marsFemaleExpectancy = this.femaleExpectancy / 1.88;
    marsFemaleExpectancy = Math.floor(marsFemaleExpectancy);

    let marsMaleExpectancy = this.maleExpectancy / 1.88;
    marsMaleExpectancy = Math.floor(marsMaleExpectancy);

    let marsAge = age / 1.88;
    marsAge = Math.floor(marsAge);

    if (gender === "female") {
      var timeLeftonMars = marsFemaleExpectancy - marsAge;
    } else {
      var timeLeftonMars = marsFemaleExpectancy - marsage;
    }
    return timeLeftonMars;
  }

  jupiterExpectancyCalculator(age, gender) {
    let jupiterFemaleExpectancy = this.femaleExpectancy / 11.86;
    jupiterFemaleExpectancy = Math.floor(jupiterFemaleExpectancy);

    let jupiterMaleExpectancy = this.maleExpectancy / 11.86;
    jupiterMaleExpectancy = Math.floor(jupiterMaleExpectancy);

    let jupiterAge = age / 11.86;
    jupiterAge = Math.floor(jupiterAge);

    if (gender === "female") {
      var timeLeftonJupiter = jupiterFemaleExpectancy - jupiterAge;
    } else {
      var timeLeftonJupiter = jupiterFemaleExpectancy - jupiterage;
    }
    return timeLeftonJupiter;
  }
}

exports.calculatorModule = Calculator;
