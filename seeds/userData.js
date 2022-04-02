const { User } = require("../models");

const userData = [
  {
    username: "starwarspotato",
    email: "star22@gmail.com",
    password: "12345678",
  },
  {
    username: "casanova",
    email: "casanova34@gmail.com",
    password: "12345678",
  },
  {
    username: "jerry_mouse",
    email: "mouse11@gmail.com",
    password: "12345678",
  },
  {
    username: "tom_cat",
    email: "cat67@gmail.com",
    password: "12345678",
  },
  {
    username: "averagestudent",
    email: "average89@gmail.com",
    password: "12345678",
  },
  {
    username: "yellowsnowman",
    email: "snowman2@gmail.com",
    password: "12345678",
  },
  {
    username: "crazy_cat_lady",
    email: "crazylady90@gmail.com",
    password: "12345678",
  },
  {
    username: "avocadorable",
    email: "avocadorable88@gmail.com",
    password: "12345678",
  },
  {
    username: "kim_chi",
    email: "kimchi09@gmail.com",
    password: "12345678",
  },
  {
    username: "man_eats_pants",
    email: "pantseater45@gmail.com",
    password: "12345678",
  },
  {
    username: "john_stamos",
    email: "stamos1@gmail.com",
    password: "12345678",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
