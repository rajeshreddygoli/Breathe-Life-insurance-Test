
const readingData = require('./readFileData');
const writeDatToFile = require('./writeFiletoCSV');
const {determineRates,calculateBMI, calculateScore, calculateMonthlyPremiums } = require('./utils');


async function TransformData(data) {
    console.log('data is ', data)
    let sampledData = [];

    if(data) {
        data.forEach(dataObj => {
            const {
                name,
                age,
                gender,
                smoker,
                email,
                height,
                weight,
                health,
                alcohol,
                policyrequested
              } = dataObj;
              console.log('data is ', data)
           
              let BMI = 0, score = 0, monthlyPremium = 0, rate = 0;
           
               if(weight && height ){
                   BMI = calculateBMI(weight, height/100);
                   console.log('BMI values afre ', BMI);
               }
           
               rate = determineRates(age, smoker);
               let formatHealthArray = health.replace(/[\[\]']+/g,'');
                   
               formatHealthArray = formatHealthArray ? formatHealthArray.split(','): [];
               
               score = calculateScore(formatHealthArray, BMI, smoker, alcohol);
           
               monthlyPremium = calculateMonthlyPremiums(score, policyrequested, rate)

               sampledData.push({
                   name,
                   BMI: BMI.toFixed(2),
                   monthly_premium: monthlyPremium.toFixed(2)
               })
        });
    }



    console.log('Monthly prem are ...', sampledData)

    await writeDatToFile('./output.csv',sampledData );
}


readingData(TransformData);