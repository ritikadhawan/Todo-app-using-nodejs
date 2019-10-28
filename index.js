const express = require('express');
const app = express();
const port = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.render('home');
});

app.listen(port,(err)=>{
    if(err)
        console.log(`Error in ${port}`);
    else
        console.log(`Server running on port ${port}`);
})