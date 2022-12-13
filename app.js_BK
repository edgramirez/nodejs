const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//Json
app.use(bodyParser.json())

//Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
        (err) => {
                if(err) console.log(err)
                else console.log("mongdb is connected");
        }
);

//Listen
app.listen(8888)
