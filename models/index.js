const User = require('./User');
const Question = require('./Question');
const Quiz = require('./Quiz')



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

// Post.hasMany(Comment, {
//     foreignKey: 'post_id',
// });

// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
// })



module.exports = { User, Quiz, Question };
