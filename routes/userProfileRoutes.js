const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

router.post(
  '/user/:userId/create-profile',
  userProfileController.createProfile
);

router.post(
  '/user/:userId/lists/:listId/add-item',
  userProfileController.addItemToList
);

router.post('/user/:userId/create-list', userProfileController.createList);

module.exports = router;
