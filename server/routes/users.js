const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// Get user profile
router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

// Update profile
router.put('/me', auth, async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { $set: req.body },
    { new: true }
  ).select('-password');
  res.json(user);
});

module.exports = router;