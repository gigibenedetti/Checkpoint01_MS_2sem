const express = require('express');
const router = express.Router();

const controller = require('../controllers/email-controller')

router.post('/send-email', controller.post);


module.exports = router;