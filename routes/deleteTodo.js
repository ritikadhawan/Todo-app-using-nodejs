const express = require('express');

const router = express.Router();
const deleteTodo = require('../controllers/delete_todo_controller');

console.log('delete router loaded');

router.get('/', deleteTodo.removeTodo);

module.exports = router;