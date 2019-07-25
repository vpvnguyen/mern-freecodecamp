
// src = https://www.youtube.com/watch?v=7CqJlxBYj-M
// 19min

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// confgures env var in dot env file
require('dotenv').config();

// create express server; set port
const app = express();
const port = process.env.PORT || 5000;

// middlewear
app.use(cors());
// parse json // send receive from server
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongodb database connection established');
});

// starts listening on a certain port for server
app.listen(port, () => {
    console.log(`server is running ont port: ${port}`);
});

// start server by running in terminal: nodemon server
