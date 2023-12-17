//Before writing a code consider reading the documentation and code carefullt

const UserProfile = require('../models/userProfileModel');

exports.createProfile = async (req, res) => {
  try {
    // TODO: Extract the user ID from the request parameters
    // TODO: Check if a profile already exists for the user, send a 400 response if exists
    // TODO: Create a new user profile and send a success response
    // res.status(201).json({ message: 'User profile created successfully', userProfile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createList = async (req, res) => {
  try {
    // TODO: Extract the user ID from the request parameters and list name from the request body
    // TODO: Find the user profile, send a 404 response if not found
    // TODO: Create a new list, add it to the user profile, and send a success response
    // res.status(201).json({ message: 'List created successfully', list: newList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addItemToList = async (req, res) => {
  try {
    // TODO: Extract the user ID and list ID from the request parameters, item name from the request body
    // TODO: Find the user profile, send a 404 response if not found
    // TODO: Find the target list, send a 404 response if not found
    // TODO: Add the item to the list, save the user profile, and send a success response
    // res.json({ message: 'Item added to the list successfully', list: targetList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
