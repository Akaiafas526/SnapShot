// route to '/' and '/api'
const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes')
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes)

module.exports = router;