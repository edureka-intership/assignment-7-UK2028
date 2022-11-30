const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const slashRouter = require('./Routers/SlashRouters');


const app = express();

const PORT = 9091;
const URI = "mongodb://localhost:27017/udit";


mongoose.connect(URI,()=>{
    console.log("mongoose is connected")
})

app.use(cors());
app.use(bodyParser.json());
app.use('/',slashRouter);

app.listen(PORT,() => {
    console.log("PORT started listening at: ",PORT);
})
