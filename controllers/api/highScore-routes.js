const router = require("express").Router();
const { HighScore } = require("../../models");

router.post("/", (req, res) => {
    HighScore.create({
      score: req.body.score,
      quiz_id: req.body.quiz_id,
      user_id: req.body.user_id
    })
      .then((dbHighScoreData) => {
        console.log(dbHighScoreData);
        res.json(dbHighScoreData);
        
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err); 
      });
  });
  
  module.exports = router;