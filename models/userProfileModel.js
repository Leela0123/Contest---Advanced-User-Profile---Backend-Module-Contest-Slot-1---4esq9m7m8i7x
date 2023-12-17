//Read model carefully and uncomment code before writing a code for userProfileController.js

const mongoose = require('mongoose');

// Define the schema for a list
const listSchema = new mongoose.Schema({
  // TODO: Define the fields for the list schema
  // listId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   default: mongoose.Types.ObjectId,
  // },
  // name: {
  //   type: String,
  //   required: true,
  // },
  // items: [
  //   {
  //     type: String,
  //   },
  // ],
});

// Define the schema for a user profile
const userProfileSchema = new mongoose.Schema({
  // TODO: Define the fields for the user profile schema
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  //   unique: true,
  // },
  // lists: [listSchema],
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
