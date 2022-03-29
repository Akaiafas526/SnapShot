const { Tag } = require('../models');

const tagData = [
  {
    name: 'tag1',
   
  },
  {
    name: 'tag2',
   
  },
  {
    name: 'tag3',
   
  },
  {
    name: 'tag4',
   
  },
  {
    name: 'tag5',
   
  },
  {
    name: 'tag6',
   
  },
  {
    name: 'tag7',
   
  },
  {
    name: 'tag8',
   
  },
  {
    name: 'tag9',
   
  },
  {
    name: 'tag10',
   
  },
  {
    name: 'tag11',
   
  },
  
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;