const express = require('express');

const router = express.Router();
const createTodo = require('../controllers/create_todo_controller');

console.log('create todo router loaded');

router.post('/', createTodo.addTodo);

module.exports = router;