const express = require('express');
const { register, login, profile } = require('../controllers/user.controller');
const {authenticateToken, authorizeUser} = require('../middlewares/auth.middleware');
const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/profile/:id',authenticateToken,authorizeUser,profile);

module.exports = router;