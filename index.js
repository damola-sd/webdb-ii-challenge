const express  = require('express');

const db = require('./data/helpers/carDb');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;


app.get('/', (req, res) =>  {
    res.json('Testing first endpooint');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });