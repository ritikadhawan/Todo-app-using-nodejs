const Todo = require('../models/todo');
module.exports.home = function(req,res){

    Todo.find({},function (err,todos){
        if(err){
            console.log(`error in fetching todos`);
            return;
        }
        return res.render('home',{
            todo_list: todos
        });
    });
}
