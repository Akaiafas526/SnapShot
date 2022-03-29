const router = require('express').Router();
const { Post } = require('../../models');
// const withAuth = require('../../utils/auth');
const path = require('path');
const multer = require('multer');



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    
    cb(null, file.originalname + '-' + uniqueSuffix+path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage,  fileFilter: function (req, file, callback) {
  var ext = path.extname(file.originalname);
  if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Only images are allowed'))
  }
  callback(null, true)
}

})

// app.post('/photo', upload.single('picture'), function (req, res, next) {
//   console.log(req.body,req.body.id,req.body.title,req.body.description)
  
//   res.json({
//       msg:"uploaded"
//     })
//   // res.send(`<img src="./uploads/${req.file.filename}" width="200px">`)
// })









// withAuth
router.post('/', upload.single('picture'), async (req, res) => {
    try {
        const newPost = await Post.create({
            title:req.body.title,
            description:req.body.description,
            userId:1,
            tagId:1,
            // userId: req.session.userId,
            picture:`./uploads/${req.file.filename}`
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
