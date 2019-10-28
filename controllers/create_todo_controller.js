const Todo = require('../models/todo');
module.exports.addTodo = function(req,res){
  
    //pushing into database
   
    Todo.create(req.body, function(err, newTodo){
        if(err){console.log('Error in creating a todo!')
            return;}
            console.log('******', newTodo);
            return res.redirect('back');
    })
    
   
}