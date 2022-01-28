const express = require('express');
const router = express.Router();

const trackController = require('../controllers/track.controller');

router.route('/')
    .get(trackController.getTrack);

module.exports = router;