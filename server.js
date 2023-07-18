const express = require('express');
const api = require("./routes/index.js")

const sequelize = require('./connection/connection');

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(api)

sequelize.sync().then(() => {

    app.listen(PORT, () => console.log('Now Listening'))
})