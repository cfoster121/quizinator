const router = require('express').Router();

const userRoutes = require('./user-routes');
const questionRoutes = require('./question-routes');
const quizRoutes = require('./quiz-routes');
const highScoreRoutes = require('./highScore-routes');
const imageRoutes = require('./image-routes');

router.use('/users', userRoutes);
router.use('/question', questionRoutes);
router.use('/quiz', quizRoutes);
router.use('/highscore', highScoreRoutes);
router.use('/image', imageRoutes);

module.exports = router;
