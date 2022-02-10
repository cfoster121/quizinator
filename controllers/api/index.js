const router = require('express').Router();

const userRoutes = require('./user-routes');
const questionRoutes = require('./question-routes');
const quizRoutes = require('./quiz-routes');

router.use('/users', userRoutes);
router.use('/question', questionRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;
