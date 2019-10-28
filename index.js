const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const Todo = require('./models/todo');
const app = express();

const port = 8000;

//static folder is set
app.use(express.static('./static'));

//body parser for form data
app.use(express.urlencoded());

// use express router
app.use('/', require('./routes'));

//setting ejs as view engine 
app.set('view engine','ejs');
app.set('views','./views');
//ejs adds unnecessary white spaces this line removes them
app.locals.rmWhitespace = true;

//listening to port
app.listen(port,(err)=>{
    if(err)
        console.log(`Error in ${port}`);
    else
        console.log(`Server running on port ${port}`);
})