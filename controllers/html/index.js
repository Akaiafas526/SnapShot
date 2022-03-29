const router = require('express').Router();

const allPostsRoutes = require('./allPosts.js');
const postTagRoutes = require('./postsByTag.js');
const postUserRoutes = require('./postsByUser');

router.use('/html', allPostsRoutes);
// -----------ASK GROUP IN MORNING-----------
// router.use('/post', postTagRoutes);
// router.use('/comment', postUserRoutes);
// ------------------------------------------
module.exports = router;
