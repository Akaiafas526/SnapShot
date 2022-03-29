const router = require('express').Router();

const allPosts = require('./allPosts.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', allPosts);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
