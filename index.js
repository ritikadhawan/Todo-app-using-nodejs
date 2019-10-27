const express = require('express');
const app = express();
const port = 8000;

app.listen(port,(err)=>{
    if(err)
        console.log(`Error in ${port}`);
    else
        console.log(`Server running on port ${port}`);
})