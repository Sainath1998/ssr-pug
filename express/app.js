const express = require('express')
const pug = require('pug')
const path = require('path')
const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get('/',(req, res)=>{
    res.send('working')
})

module.exports = app