const express = require('express');
const app = express();
const cors = require('cors');
const repository = require('./repository.js');
const settings = require('./settings.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const path = settings.filePath;
    const dataPromise = repository.get(path);
    dataPromise
        .then(response => {
            const data = {};
            data.cities = response;
            req.data = data;
            next();
        })
        .catch(err => {
            return res  
                .status(500)
                .send({ message: 'Error while getting data' });
        });

});

// if required, can use chain post, put and delete methods
app.get('/api/cities', (req, res) => {
    if (!req.data.cities) {
        return res
            .status(404)
            .send({ message: `No data found`})
    }
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).send(req.data.cities);
});

module.exports = app;