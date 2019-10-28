const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const Todo = require('./models/todo');
const app = express();

const port = 8000;

//body parser for form data
app.use(express.urlencoded());
// use express router
app.use('/', require('./routes'));


//setting ejs as view engine 
app.set('view engine','ejs');
app.set('views','./views');

//listening to port
app.listen(port,(err)=>{
    if(err)
        console.log(`Error in ${port}`);
    else
        console.log(`Server running on port ${port}`);
})