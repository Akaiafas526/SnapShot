const router = require("express").Router();
const { Post } = require("../../models");
const authorize = require("../../utils/auth");
const path = require("path");
const multer = require("multer");
const fs = require("fs");

// Sets storage folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },

  // Creates random file name using the original name with a random string of numbers based on the current time to prevent duplicate names
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(
      null,
      path.parse(file.originalname).name.replace(" ", "") +
        "-" +
        uniqueSuffix +
        path.extname(file.originalname)
    );
  },
});

// Sets the storage and using a filter function to ensure the file is of the few allowed file types
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname).toLowerCase();
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
});

// Creates post
router.post("/", authorize, upload.single("picture"), async (req, res) => {
  try {

    // Check for empty string
    let newTitle = req.body.title;
    let newDescription = req.body.description;
    const emptyTitle = req.body.title.replace(/\s+/g, '');
    const emptyDescription = req.body.description.replace(/\s+/g, '')

    if (!emptyTitle){
      newTitle = 'Utitled'
    }
    if (!emptyDescription){
      newDescription = 'No description'
    }
    
    // Check if no tag selected
    if (req.body.tagId === "all" || !req.body.tagId) {
      tagid = null;
    } else {
      tagid = req.body.tagId;
    }
    const newPost = await Post.create({
      title: newTitle,
      description: newDescription,
      tagId: tagid,
      userId: req.session.userId,
      picture: `/uploads/${req.file.filename}`,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Edits post
router.put("/:id", authorize, async (req, res) => {
  try {

    // Check for empty sting
    let body = {}
    const emptyTitle = req.body.title.replace(/\s+/g, '');
    const emptyDescription = req.body.description.replace(/\s+/g, '')
    if (req.body.title&&emptyTitle){
      body.title = req.body.title
    }
    if (req.body.description&&emptyDescription){
      body.description = req.body.description
    }

    const [affectedRows] = await Post.update(body, {
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    // If post was updated
    if (affectedRows) {
      res.status(200).json("Post updated!");
    } else {
      res.status(404).json("Post not updated");
    }
  } catch (err) {
    res.status(400).json(err);
  }
});
// deletes post
router.delete("/:id", authorize, async (req, res) => {
  try {
    const postPicture = await Post.findByPk(req.params.id);
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
        
      },
    });

    if (!deletedPost) {
      res.status(404).json({ message: "Invalid post ID!" });
      return;
    }

    // Prevents seed pictures from being deleted
    if (!postPicture.picture.slice(0, 18) === "/uploads/protected") {
      fs.unlink(`./public${postPicture.picture}`, (err) => {
        err ? console.log(err) : console.log("Deleted");
      });
    }
    res.status(200).json("Post Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
