const sequelize = require('../config/connection');
const Question = require('../models/Question');
const questionData = require('./question-seeds.json');
const Quiz = require('../models/Quiz');
const quizData = require('./quiz-seeds.json');
const User = require('../models/User');
const userData = require('./user-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Quiz.bulkCreate(quizData, {
    individualHooks: true,
    returning: true,
  });


  await Question.bulkCreate(questionData, {
    individualHooks: true,
    returning: true,
  });



  process.exit(0);
};


seedDatabase();
