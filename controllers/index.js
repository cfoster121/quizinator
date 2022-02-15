const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const userRoutes = require('./api/user-routes.js');

router.use('/', homeRoutes);
router.use('/api/', apiRoutes);

module.exports = router;