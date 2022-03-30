const { User } = require('../models');

const userData = [
  {
    username: 'starwarspotato',
    email: 'star@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'casanova',
    email: 'casanova@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'jerry_mouse',
    email: 'mouse@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'tom_cat',
    email: 'cat@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'averagestudent',
    email: 'average@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'yellowsnowman',
    email: 'snowman@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'crazy_cat_lady',
    email: 'crazylady@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'avocadorable',
    email: 'avocadorable@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'kim_chi',
    email: 'kimchi@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'man_eats_pants',
    email: 'pantseater@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'john_stamos',
    email: 'stamos@gmail.com',
    password: '12345678',
    
  },
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;