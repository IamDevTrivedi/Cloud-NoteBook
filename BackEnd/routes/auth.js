const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

router.post('/signup', (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save()
    res.send('SignUp');
});

module.exports = router;