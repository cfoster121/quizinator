const User = require('./User');
const Question = require('./Question');
const Quiz = require('./Quiz')
const HighScore = require('./HighScore')


User.hasMany(Quiz, {
    foreignKey: 'user_id',
});

Quiz.belongsTo(User, {
    foreignKey: 'user_id',
});

Quiz.hasMany(Question, {
    foreignKey: 'quiz_id',
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
});

User.hasMany(HighScore, {
    foreignKey: 'user_id',
});

Quiz.hasMany(HighScore, {
    foreignKey: 'quiz_id',
});

HighScore.belongsTo(User, {
    foreignKey: 'user_id',
});

HighScore.belongsTo(Quiz, {
    foreignKey: 'quiz_id',
});

module.exports = { User, Quiz, Question, HighScore };
