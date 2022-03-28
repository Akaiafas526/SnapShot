const router = require('express').Router();
const { Comment } = require('../../models');
// const withAuth = require('../../utils/auth');


// withAuth
router.post('/',  async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            // userId: req.session.userId,
        });
        
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err);
    }
});


// withAuth
router.put('/:id',  async (req, res) => {
  try {
    const [ affectedRows ] = await Comment.update(req.body, {
      where:{
        id:req.params.id,
        userId:1
        // userId:req.session.userId
      }

    });

    if (affectedRows){
        res.status(200).json('Comment updated!');
    } else {
        res.status(404).json('Post not updated')
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// withAuth
router.delete('/:id',  async (req, res) => {
  try {
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id:1
        // user_id: req.session.user_id,
      },
    });

    if (!deletedComment) {
      res.status(404).json({ message: 'Invalid post ID!' });
      return;
    }

    res.status(200).json('Comment Deleted!');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
