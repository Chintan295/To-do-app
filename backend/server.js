const express= require('express');
const cors= require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://sahilsavaliya110:sahil110310@cluster0-7wnad.mongodb.net/Todo?retryWrites=true&w=majority";
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {console.log("Mongobd started sucessfully")});

const registerRouter = require('./routes/registers');
const userRouter = require('./routes/users');
const activityRouter = require('./routes/activity');
app.use('/registers', registerRouter);
app.use('/users', userRouter);
app.use('/activity',activityRouter);


app.listen(port, ()=> {
    console.log(`serever is running at: ${port}`);
})