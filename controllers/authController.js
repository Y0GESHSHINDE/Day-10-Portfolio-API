const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Admin login and JWT token generation
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username' });
    }

    // Check if the provided password matches the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate a JWT token with the admin's ID as the payload
    const token = jwt.sign(
      { admin: user._id }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }  // Token expires in 1 hour
    );

    // Send the token in the response
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  loginAdmin,
};
