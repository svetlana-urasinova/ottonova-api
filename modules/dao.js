const fs = require('fs').promises;
const dao = {
    async get(path) {
        return await fs.readFile(path, 'utf8');
    }
}

module.exports = dao;