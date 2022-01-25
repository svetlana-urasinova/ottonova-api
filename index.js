const dataModel = require('./datamodel.js');
const settings = {
    port: 8080,
    filePath: 'data/cities.json'
}

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    const path = settings.filePath;
    const dataPromise = dataModel.getData(path);
    dataPromise
        .then(data => {
            req.cities = data;
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
        if (!req.cities) {
            return res
                .status(404)
                .send({ message: `No data found`})
        }
        return res.status(200).send(req.cities);
    });

app.listen(
    settings.port,
    () => { console.log(`Listening to ${settings.port}...`); }
);