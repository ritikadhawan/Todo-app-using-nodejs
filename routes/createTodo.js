const express = require('express');

const router = express.Router();
const createTodo = require('../controllers/create_todo_controller');

console.log('home router loaded');

router.post('/', createTodo.addTodo);

module.exports = router;