const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('home router loaded');

router.get('/', homeController.home);
// router.use('/addTodo',require('./addTodo'));
module.exports = router;