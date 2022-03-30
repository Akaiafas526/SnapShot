const { Post } = require("../models");
const image = require("../");

const postData = [
  {
    title: "Australia Trip",
    description: "Kangaroo Jack came to play!",
    picture: "./uploads/kangaroo_pic.jpg",
    userId: 1,
    tagId: 1,
  },
  {
    title: "Bon Appetit",
    description: "Look at that croissant!",
    picture: "./uploads/croissant_pic.jpg",
    userId: 2,
    tagId: 2,
  },
  {
    title: "Psychodelic",
    description: "Absolutely mind boggling!",
    picture: "./uploads/art_pic.jpg",
    userId: 3,
    tagId: 3,
  },
  {
    title: "Love for Cyprus",
    description:
      "Cyprus is a stunning island with crystal clear water and wonderful people.",
    picture: "./uploads/cyprus_pic.jpg",
    userId: 11,
    tagId: 4,
  },
  {
    title: "Skiing in the Swiss Alpes",
    description: "Breathtaking experience skiing on these beautiful mountain!",
    picture: "./uploads/alpes_pic.jpg",
    userId: 4,
    tagId: 5,
  },
  {
    title: "Leap of Faith",
    description: "Never be afraid to take the leap to success!",
    picture: "./uploads/leap_pic.jpg",
    userId: 5,
    tagId: 6,
  },
  {
    title: "Family is Forever",
    description: "Grateful for the family I have everyday!",
    picture: "./uploads/family_pic.jpg",
    userId: 6,
    tagId: 10,
  },
  {
    title: "DOGGO",
    description:
      "Handsome man with his shades on.",
    picture:
      "./uploads/dog_pic.jpg",
    userId: 7,
    tagId: 9,
  },
  {
    title: "YUM",
    description:
      "Grilled on the charcoal to perfection..",
    picture:
      "./uploads/kebab_pic.jpg",
    userId: 8,
    tagId: 2,
  },
  {
    title: "World Trade Center",
    description:
      "Favorite NYC architecture",
    picture:
      "./uploads/architecture_pic.jpg",
    userId: 9,
    tagId: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
