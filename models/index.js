// import models
const Comment = require('./Comment');
const Post = require('./Post');
const Tag = require('./Tag');
const User = require('./User');

User.hasMany(Comment,{
  foreignKey:'userId'
})

User.hasMany(Post,{
    foreignKey:'userId'
})
Comment.belongsTo(User,{
  foreignKey:'userId',
  onDelete:'CASCADE'
})

Post.hasMany(Comment,{
  foreignKey:'postId'
})
Comment.belongsTo(Post,{
  foreignKey:'postId',
  onDelete:'CASCADE'
})
Post.belongsTo(User,{
  foreignKey:'userId',
  onDelete:'CASCADE'
})

Tag.hasMany(Post,{
  foreignKey:'tagId'
})

Post.belongsTo(Tag,{
  foreignKey:'tagId',
  onDelete:'CASCADE'
})


module.exports = {
  Comment,
  Post,
  Tag,
  User,
};
