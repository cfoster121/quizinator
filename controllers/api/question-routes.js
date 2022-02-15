const router = require("express").Router();
const { Question } = require("../../models");

router.post("/", async (req, res) => {
  try {
    let dbQuestionData
    for (let i of req.body) {
      dbQuestionData = await Question.create({
        question_content: i.question_content,
        answer_a: i.answer_a,
        answer_b: i.answer_b,
        answer_c: i.answer_c,
        answer_d: i.answer_d,
        answer_correct: i.answer_correct,
        quiz_id: i.quiz_id
      });
    }
    res.status(200).json(dbQuestionData);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err); 
  }
});

module.exports = router;