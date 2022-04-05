const router = require("express").Router();
const { User } = require("../../models");

// Creates new user. creates session
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


// Validates login and creates session if successful
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, try again." });
      return;
    }

    const correctPassword = await userData.checkPassword(req.body.password);

    if (!correctPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, try again." });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.status(200).json({ user: userData, message: "You are logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


// Destroys session on logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
