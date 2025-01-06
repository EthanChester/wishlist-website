const express = require('express');

const listsController = require('../controllers/lists');

const router = express.Router();

// GET /user-lists
router.get('/user-lists', listsController.getUserLists);

// GET /list/id
router.get('/list/:id', listsController.getList);

module.exports = router;