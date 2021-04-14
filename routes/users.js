const CONSTANTS = require("../constants");
const express = require("express");
const router = express.Router();
const { register }  = require('../controllers/userController');

router.post(CONSTANTS.ENDPOINT.REGISTER, register);

module.exports = router;
