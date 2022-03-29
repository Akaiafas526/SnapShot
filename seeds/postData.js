const { Post } = require('../models');
const image = require('../')

const postData = [
  {
    title: 'title1',
    description:
      '1111Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:6,
    tagId:4,
  },
  {
    title: 'title2',
    description:
      '2222Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:6,
    tagId:2,
  },
  {
    title: 'title3',
    description:
      '333Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:4,
    tagId:8,
  },
  {
    title: 'title4',
    description:
      '444Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:8,
    tagId:2,
  },
  {
    title: 'title5',
    description:
      '555Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:1,
    tagId:3,
  },
  {
    title: 'title6',
    description:
      '666Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:11,
    tagId:5,
  },
  {
    title: 'title7',
    description:
      '777Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:5,
    tagId:5,
  },
  {
    title: 'title8',
    description:
      '888Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:1,
    tagId:8,
  },
  {
    title: 'title9',
    description:
      '999Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:8,
    tagId:1,
  },
  {
    title: 'title10',
    description:
      '101010Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:2,
    tagId:2,
  },
  {
    title: 'title11',
    description:
      '11 11 11Branches with pink apricot blossoms against a blue background.',
    picture:'./uploads/theater-background.png-1648578616163-239219904.png',
    userId:8,
    tagId:6,
  },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;