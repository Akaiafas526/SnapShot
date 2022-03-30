const router = require('express').Router();
const { Post, Comment, User, Tag } = require('../models');
// const withAuth = require('../../utils/auth');


// withAuth
router.get('/',  async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [{model:Comment},{model:User},{model:Tag}]
        });
        const post = posts.map(post=>post.get({plain:true}));
        console.log(post)
        res.render('home',{post})
        // res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err);
    }
});


// withAuth
router.get('/posts/:id',  async (req, res) => {
    try {
        const posts = await Post.findByPk(req.params.id,{
            include: [{model:Comment,include:[{model:User}]},{model:User},{model:Tag}]
        });
        const post = posts.get({plain:true});
        console.log(post,'HERE')
        res.render('singlePost',{post})
        ////res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err);
    }
});



router.get('/tag/:id',  async (req, res) => {
    console.log(req.params.id)
    try {
        const posts = await Post.findAll({
            include: [{model:Comment,include:[{model:User}]},{model:User},{model:Tag}],
        
            where:{
                tagId:req.params.id
            }
        });
        const post = posts.map(post=>post.get({plain:true}));
        console.log(post)
        // res.render('SOME_VIEW',post)
        res.status(200).json(post)
    } catch (err) {
        res.status(400).json(err);
    }
});

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

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;
