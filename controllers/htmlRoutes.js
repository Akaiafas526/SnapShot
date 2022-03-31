const router = require('express').Router();
const { Post, Comment, User, Tag } = require('../models');
const authorize = require('../utils/auth');


// withAuth
router.get('/',authorize,  async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{model:Comment},{model:User},{model:Tag}]
        });
        const tags = await Tag.findAll();
        const tag = tags.map(tag=>tag.get({plain:true}))
        const post = posts.map(post=>post.get({plain:true}));
        console.log(post)
        res.render('home',{post,tag})
        // res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err);
    }
});


// withAuth
router.get('/posts/:id', authorize, async (req, res) => {
    try {
        const posts = await Post.findByPk(req.params.id,{
            include: [{model:Comment,include:[{model:User}]},{model:User},{model:Tag}]
        });
        const post = posts.get({plain:true});
        console.log(post,'HERE',req.session.userId)
        const isOwner = {valid:req.session.userId===post.user.id}
        console.log('VALID ',isOwner)
        res.render('singlePost',{post,isOwner})
        ////res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err);
    }
});



router.get('/tag/:id',authorize,  async (req, res) => {
    console.log(req.params.id)
    try {
        const posts = await Post.findAll({
            include: [{model:Comment,include:[{model:User}]},{model:User},{model:Tag}],
        
            where:{
                tagId:req.params.id
            }
        });
        const tags = await Tag.findAll();
        
        const post = posts.map(post=>post.get({plain:true}));
        const tag = tags.map(tag=>tag.get({plain:true}))
        console.log(post,tag)
        res.render('postByTag',{post,tag})
        // res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err);
    }
});

// withAuth
router.get('/user/:id',authorize,  async (req, res) => {
    try {
        const user = req.params.id || req.session.userId
        const posts = await Post.findAll({
            include: [{model:Comment,include:[{model:User}]},{model:User},{model:Tag}],
        
            where:{
                userId:user
            }
        });
        const post = posts.map(post=>post.get({plain:true}));
        res.render('userProfile',{post})
        // res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;
