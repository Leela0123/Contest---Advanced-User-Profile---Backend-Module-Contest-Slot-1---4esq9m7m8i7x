const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.create({ username, password });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
