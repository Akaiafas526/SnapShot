const router = require('express').Router();
const { Post, Comment, User, Tag } = require('../../models');
// const withAuth = require('../../utils/auth');

// withAuth
router.get('/user/:id',  async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{model:Comment,include:[{model:User}]},{model:User},{model:Tag}],
        
            where:{
                userId:req.params.id
            }
        });
        const post = posts.map(post=>post.get({plain:true}));
        console.log(post)
        res.render('userProfile',{post})
        // res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
