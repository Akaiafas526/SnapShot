const { User } = require('../models');

const userData = [
  {
    username: 'user1',
    email: 'user1@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user2',
    email: 'user2@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user3',
    email: 'user3@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user4',
    email: 'user4@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user5',
    email: 'user5@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user6',
    email: 'user6@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user7',
    email: 'user7@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user8',
    email: 'user8@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user9',
    email: 'user9@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user10',
    email: 'user10@gmail.com',
    password: '12345678',
    
  },
  {
    username: 'user11',
    email: 'user11@gmail.com',
    password: '12345678',
    
  },
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;