const fs = require('fs');
const csv = require('csv-parser');

const inputFilePath = './input.csv';

const readingData = (TransformData) => {
    let dataArray = [];
    
    fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('data', data => {dataArray.push(data)})
    .on('end',function(){
        TransformData(dataArray)
    }); 
}

module.exports = readingData;