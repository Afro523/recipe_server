const express = require('express');
const app = express();
import data from './mockdata';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.json(data)
});

app.get('/recipes/:id', (req, res) => {    
    let responseData = data.library.recipes[req.params.id];
    res.send(responseData)
})

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
