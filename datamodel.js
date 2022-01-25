// now get all data from json
// can for example use some class to get data from db
async function getDataFromJSON(path) {
    const fs = require('fs').promises;
    return await fs.readFile(path, 'utf8');
}

async function getData(path) {
    return await getDataFromJSON(path);
} 

module.exports.getData = getData;