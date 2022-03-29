const router = require('express').Router();
const { Post } = require('../../models');
// const withAuth = require('../../utils/auth');


// withAuth
router.post('/',  async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            // userId: req.session.userId,
        });
        
        res.status(200).json(newPost)
    } catch (err) {
        res.status(400).json(err);
    }
});


// withAuth
router.put('/:id',  async (req, res) => {
  try {
    const [ affectedRows ] = await Post.update(req.body, {
      // ODO: SET ID TO ID PARAMETER INSIDE WHERE CLAUSE CONDITION FIELD
      where:{
        id:req.params.id,
        userId:1
        // userId:req.session.userId
      }

    });

    if (affectedRows){
        res.status(200).json('Post updated!');
    } else {
        res.status(404).json('Post not updated')
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// withAuth
router.delete('/:id',  async (req, res) => {
  try {
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id:1
        // user_id: req.session.user_id,
      },
    });

    if (!deletedPost) {
      res.status(404).json({ message: 'Invalid post ID!' });
      return;
    }

    res.status(200).json('Post Deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
