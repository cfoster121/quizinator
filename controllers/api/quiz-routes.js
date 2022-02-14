const router = require("express").Router();
const { Quiz } = require("../../models");
//get all the comments


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

router.post("/", (req, res) => {
  //expects 
  Quiz.create({
    title: req.body.title,
    category: req.body.category,
    user_id: req.session.userid
  })
    .then((dbQuizData) => {
      console.log(dbQuizData);
      // res.body = dbQuizData;
      res.json(dbQuizData);
      
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); //REST api needs status
    });
});

router.delete("/:id", (req, res) => {
  Quiz.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbQuizData) => {
      if (!dbQuizData) {
        res.status(404).json({ message: "No Post found with this id" });
        return;
      }
      res.json(dbQuizData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;