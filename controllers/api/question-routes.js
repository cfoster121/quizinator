const router = require("express").Router();
const { Question } = require("../../models");
//get all the comments
// router.get("/:quiz_id", (req, res) => {
//   Question.findByPk(req.params.quiz_id,{
//   })
//     .then((dbQuestionData) => {
//       res.json(dbQuestionData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post("/", (req, res) => {
    //expects 
    Question.create({
      question_content: req.body.question_content,
      answer_a: req.body.answer_a,
      answer_b: req.body.answer_b,
      answer_c: req.body.answer_c,
      answer_d: req.body.answer_d,
      answer_correct: req.body.answer_correct,
      quiz_id: req.body.quiz_id
    //   user_id: req.session.user_id,
    })
      .then((dbQuestionData) => {
        res.json(dbQuestionData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err); //REST api needs status
      });
  });

module.exports = router;