const sequelize = require("../config/connection");
const seedUsers = require("./userData");
const seedTags = require("./tagData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedTags();

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();
