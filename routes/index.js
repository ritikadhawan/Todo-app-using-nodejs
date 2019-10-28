const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('home router loaded');

router.get('/', homeController.home);
router.use('/create-todo',require('./createTodo'));

module.exports = router;