const fs = require('fs').promises;
const repository = {
// now get all data from json
// can for example use some class to get data from db
    async get(path) {
        return await fs.readFile(path, 'utf8');
    }
}

module.exports = repository;