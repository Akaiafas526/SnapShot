const { Comment } = require('../models');

const commentData = [
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  {
    userId: 1,
    postId: 1,
    text: 'Some really good comment',
    
  },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;