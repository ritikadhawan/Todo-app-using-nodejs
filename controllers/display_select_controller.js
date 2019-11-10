const Todo = require('../models/todo');
module.exports.displayTodo = function(req,res){
  
    //displaying selected todo from database
   
    var id = req.query.id;
    
    Todo.findById(id,(err,todo)=>{
        console.log(`todo selected ${todo}`);
        if(err){
            console.log(`error in fetching todos`);
            return;
        }
        // $('#display-selected-todo').append("<div>hello</div>");
        document.getElementById('display-selected-todo').innerHTML('hello');
        // return res.redirect('back');
        // return res.render('home',{
        //     todo_selected: todo
            
           
        // });
        // res.json(todo);
        return res.redirect('back');
    });
    
   
}