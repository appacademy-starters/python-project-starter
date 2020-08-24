const express = require('express');
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll();
    res.json({ users });
}));

module.exports = router;
