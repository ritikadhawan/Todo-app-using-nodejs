const Todo = require('../models/todo');
module.exports.removeTodo = function(req,res){
  
    //deleting from database
   
    var id = req.query.id;

    Todo.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            console.log('Error occured in deleting contact');
            return;
        }
        return res.redirect('back');
    });
    
   
}