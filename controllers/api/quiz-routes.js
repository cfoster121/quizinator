const router = require("express").Router();
const { Quiz } = require("../../models");
//get all the comments


router.get("/:quiz_id", (req, res) => {
  Quiz.findByPk(req.params.quiz_id,{
  })
    .then((dbQuizData) => {
      res.json(dbQuizData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    //expects 
    Quiz.create({
        title: req.body.title,
        category: req.body.category,
        user_id: req.body.user_id
    //  user_id: req.session.user_id,
    })
      .then((dbQuizData) => {
        res.json(dbQuizData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err); //REST api needs status
      });
  });

module.exports = router;