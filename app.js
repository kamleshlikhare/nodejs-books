const express = require('express');
const app = express();

app.get('/get',(req,res, next) => {
    res.json({test:'test'})
});

module.exports = app;
