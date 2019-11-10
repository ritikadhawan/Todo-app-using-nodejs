const express = require('express');

const router = express.Router();
const displayTodo = require('../controllers/display_select_controller');

// console.log('create todo router loaded');

router.get('/', displayTodo.displayTodo);

module.exports = router;