function determineRates(age, smokingStatus) {
  let rate = 0;

  if (age >= 18 && age < 40) {
    if (smokingStatus === "S") {
      rate = 0.25;
    } else if (smokingStatus === "NS") {
      rate = 0.1;
    }
  } else if (age >= 40 && age < 60) {
    if (smokingStatus === "S") {
      rate = 0.55;
    } else if (smokingStatus === "NS") {
      rate = 0.3;
    }
  }

  return rate;
}

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function calculateScore(health, BMI, smoker, alcohol) {
  let score = 0;

  //calculate score with respect to health factors
  health.forEach(healthfactor => {
    if (healthfactor === "DEPRESSION" || healthfactor === "ANXIETY") {
      score = score + 15;
    } else if (healthfactor === "SURGERY") {
      score = score + 25;
    } else if (healthfactor === "HEART") {
      score = score + 30;
    }
  });

  //calculate score based on BMI
  if (BMI < 25) {
    score = score + 15;
  } else if (BMI >= 25.0 && BMI < 30.0) {
    score = score + 25;
  } else if (BMI >= 30.0) {
    score = score + 30;
  }

  if (alcohol >= 10 && alcohol < 25) {
    score = score + 25;
  } else if (alcohol >= 25) {
    score = score + 30;
  }

  if (smoker === "S") {
    score = score + 25;
  }

  return score;
}

function calculateMonthlyPremiums(score, requestedPolicy, rate) {
  let chargedRate = 0;

  if (score < 75) {
    chargedRate = 1;
  } else if (score >= 75 && score < 100) {
    chargedRate = 1.15;
  } else if (score >= 100) {
    chargedRate = 1.25;
  }

  const monthlyPremium = (chargedRate * requestedPolicy * rate) / 1000;

  return monthlyPremium;
}

module.exports = {
  determineRates,
  calculateBMI,
  calculateScore,
  calculateMonthlyPremiums
};
