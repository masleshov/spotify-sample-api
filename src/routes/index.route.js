const express = require('express');
const tracks = require('./track.route');
const login = require('./login.route')

const router = express.Router();

router.use('/tracks', tracks)
router.use('/login', login)

router.get('/', (req, res) => res.send('API'));
router.get('/health', (req, res) => {
  const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;