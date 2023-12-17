const UserProfile = require('../models/userProfileModel');

exports.createProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Check if a profile already exists for the user
    const existingProfile = await UserProfile.findOne({ user: userId });
    if (existingProfile) {
      return res.status(400).json({ message: 'Profile already exists for the user' });
    }

    // Create a new user profile
    const userProfile = await UserProfile.create({ user: userId });
    res.status(201).json({ message: 'User profile created successfully', userProfile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createList = async (req, res) => {
  try {
    const userId = req.params.userId;
    const listName = req.body.listName;

    // Find the user profile
    const userProfile = await UserProfile.findOne({ user: userId });
    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    // Create a new list, add it to the user profile
    const newList = { name: listName, items: [] };
    userProfile.lists.push(newList);

    // Save the user profile
    await userProfile.save();

    res.status(201).json({ message: 'List created successfully', list: newList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addItemToList = async (req, res) => {
  try {
    const userId = req.params.userId;
    const listId = req.params.listId;
    const itemName = req.body.itemName;

    // Find the user profile
    const userProfile = await UserProfile.findOne({ user: userId });
    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    // Find the target list
    const targetList = userProfile.lists.id(listId);
    if (!targetList) {
      return res.status(404).json({ message: 'List not found' });
    }

    // Add the item to the list
    targetList.items.push(itemName);

    // Save the user profile
    await userProfile.save();

    res.json({ message: 'Item added to the list successfully', list: targetList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
