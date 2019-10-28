const Todo = require('./models/todo');
module.exports.home = function(req,res){

    Todo.find({},(err,todos)=>{
        if(err){
            console.log(`error in fetching todos`);
            return;
        }
        res.render('home',{
            todo_list: todos
        });
    })
}