const mongoose = require('mongoose');

// Define the schema for a list
const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  items: [
    {
      type: String,
    },
  ],
});

// Define the schema for a user profile
const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  lists: [listSchema],
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
