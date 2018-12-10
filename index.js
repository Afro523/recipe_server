const express = require('express');
const app = express();
import data from './mockdata';

app.get('/', (req, res) => {
    res.json(data)
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
