const express = require('express');
const bodyParser = require('body-parser');
const pong = require('./middlewares/pong');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.get('/ping', pong);

app.listen(PORT, () => console.log(`Ouvindo na ${PORT}`));