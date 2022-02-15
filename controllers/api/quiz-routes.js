const router = require("express").Router();
const { Quiz } = require("../../models");

//Display quizzes by ID
router.get("/:quiz_id", (req, res) => {
  Quiz.findByPk(req.params.quiz_id, {
  })
    .then((dbQuizData) => {
      res.json(dbQuizData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Create a new quiz
router.post("/", (req, res) => {
  Quiz.create({
    title: req.body.title,
    category: req.body.category,
    user_id: req.session.userid
  })
    .then((dbQuizData) => {
      console.log(dbQuizData);
      res.json(dbQuizData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); 
    });
});

module.exports = router;