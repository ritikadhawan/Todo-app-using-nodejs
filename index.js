const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const Todo = require('./models/todo');
const app = express();

const port = 8000;



// use express router
// app.use('/', require('./routes'));
// const homeController = require(path.join(__dirname,'./controllers/home_controllers'));
const router= express.Router();
router.get('/',function(){
    res.render('home');
})
// app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');



// app.get('/',(req,res)=>{
//     res.render('home');
// });

app.listen(port,(err)=>{
    if(err)
        console.log(`Error in ${port}`);
    else
        console.log(`Server running on port ${port}`);
})