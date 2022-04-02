const router = require("express").Router();
const { Tag } = require("../../models");
const authorize = require("../../utils/auth");

// withAuth
router.get("/", authorize, async (req, res) => {
  try {
    const tags = await Tag.findAll();

    res.status(200).json(tags.map((tag) => tag.get({ plain: true })));
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
