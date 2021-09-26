const ObjectsToCsv = require('objects-to-csv')

async function writeDatToCSVFile(path, data) {
    const csv = new ObjectsToCsv(data);
    await csv.toDisk(path);
}

module.exports = writeDatToCSVFile