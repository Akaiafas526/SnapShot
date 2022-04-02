const { Comment } = require("../models");

const commentData = [
  {
    userId: 2,
    postId: 1,
    text: "What an amazing animal! hope you had a great trip.",
  },
  {
    userId: 1,
    postId: 2,
    text: "Yum! such an artsy photo!",
  },
  {
    userId: 4,
    postId: 3,
    text: "wow...my brain hurts",
  },
  {
    userId: 8,
    postId: 3,
    text: "such a cool photo",
  },
  {
    userId: 3,
    postId: 4,
    text: "what a beautiful picture!",
  },
  {
    userId: 5,
    postId: 4,
    text: "the water is so blue!",
  },
  {
    userId: 6,
    postId: 5,
    text: "have fun!",
  },
  {
    userId: 2,
    postId: 5,
    text: "stunning photo!",
  },
  {
    userId: 10,
    postId: 6,
    text: "you are so brave!",
  },
  {
    userId: 11,
    postId: 7,
    text: "family is the best!",
  },
  {
    userId: 1,
    postId: 8,
    text: "where can I get a pair of glasses like that?",
  },
  {
    userId: 8,
    postId: 9,
    text: "kebabs are my favorite",
  },
  {
    userId: 2,
    postId: 10,
    text: "they did such a great job rebuilding the World Trade Center!",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
