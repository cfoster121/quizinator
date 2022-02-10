const sequelize = require('../config/connection');
// const Post = require('../models/Post');
const quizData = require('./quiz-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await Post.bulkCreate(postData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
