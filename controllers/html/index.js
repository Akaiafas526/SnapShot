const router = require('express').Router();

const allPostsRoutes = require('./allPosts.js');
const postTagRoutes = require('./postsByTag.js');
const postUserRoutes = require('./postsByUser');

router.use('/', allPostsRoutes);

router.use('/tag', postTagRoutes);
router.use('/user', postUserRoutes);

module.exports = router;
