const express = require('express');
const { login, getMe, logout } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', logout);

module.exports = router;

// Ajoutez cette route
router.get('/verify', protect, (req, res) => {
    res.status(200).json({
      success: true,
      user: {
        id: req.user._id,
        nom: req.user.nom,
        email: req.user.email
      },
      role: req.user.role
    });
  });