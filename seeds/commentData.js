const { Comment } = require('../models');

const commentData = [
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 10,
    postId: 1,
    text: '111Some really good comment',
    
  },
  {
    userId: 3,
    postId: 2,
    text: '222Some really good comment',
    
  },
  {
    userId: 9,
    postId: 3,
    text: '333Some really good comment',
    
  },
  {
    userId: 8,
    postId: 5,
    text: '444Some really good comment',
    
  },
  {
    userId: 2,
    postId: 7,
    text: '555Some really good comment',
    
  },
  {
    userId: 3,
    postId: 10,
    text: '666Some really good comment',
    
  },
  {
    userId: 7,
    postId: 3,
    text: '777Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: '88Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: '999Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: '1010Some really good comment',
    
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;