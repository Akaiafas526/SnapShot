const router = require("express").Router();
const { Post, Comment, User, Tag } = require("../models");
const authorize = require("../utils/auth");

// Returns all posts and tags(for dropdown)
router.get("/", authorize, async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{ model: Comment }, { model: User }, { model: Tag }],
      order: [["updatedAt", "DESC"]],
    });
    const tags = await Tag.findAll();

    // Return relevant data
    const tag = tags.map((tag) => tag.get({ plain: true }));
    const post = posts.map((post) => post.get({ plain: true }));
 
    // Sends data to home view
    res.render("home", { post, tag, userId: req.session.userId });
    
  } catch (err) {
    res.status(400).json(err);
  }
});

// Gets post by post id 
router.get("/posts/:id", authorize, async (req, res) => {
  try {
    const posts = await Post.findByPk(req.params.id, {
      include: [
        { model: Comment, include: [{ model: User }] },
        { model: User },
        { model: Tag },
      ],
      order: [["updatedAt", "DESC"]],
    });
    const post = posts.get({ plain: true });

    // Creates isOwner boolean for each comment stating if the current user id matches the user id of the comment
    post.comments.forEach((comment) => {
      comment.isOwner = { valid: req.session.userId === comment.userId };
    });
    
    // Creates isOwner boolean to check if current user id matches user id of post
    const isOwner = { valid: req.session.userId === post.user.id };
    
    // Sends data to singlePost view
    res.render("singlePost", { post, isOwner, userId: req.session.userId });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Gets posts by tag id (# dropdown)
router.get("/tag/:id", authorize, async (req, res) => {

  try {
    const posts = await Post.findAll({
      include: [
        { model: Comment, include: [{ model: User }] },
        { model: User },
        { model: Tag },
      ],
      order: [["updatedAt", "DESC"]],
      where: {
        tagId: req.params.id,
      },
    });
    const tags = await Tag.findAll();

    // Stores the tag currently chosen (for displaying the tag name chosen in the view)
    const current = await Tag.findByPk(req.params.id)
    const post = posts.map((post) => post.get({ plain: true }));
    const tag = tags.map((tag) => tag.get({ plain: true }));
    const currentTag = current.get({ plain: true });

    // Sends data to the postByTag view
    res.render("postByTag", { post, tag, userId: req.session.userId,currentTag:currentTag });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Gets posts by a certain user id
router.get("/user/:id", authorize, async (req, res) => {
  try {
    const user = req.params.id || req.session.userId;
    const posts = await Post.findAll({
      include: [
        { model: Comment, include: [{ model: User }] },
        { model: User },
        { model: Tag },
      ],
      order: [["updatedAt", "DESC"]],
      where: {
        userId: user,
      },
    });
    const post = posts.map((post) => post.get({ plain: true }));

    // Sends data to userProfile view
    res.render("userProfile", { post });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Renders the register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Renders the login page
router.get("/login", (req, res) => {
  res.render("login");
});


module.exports = router;
