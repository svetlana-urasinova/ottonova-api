const app = require('./app.js');
const settings = require('./settings.js');

const port = settings.port;
app.listen(
    port,
    () => { console.log(`Listening to ${port}...`); }
);