const router = require("express").Router();
const { HighScore } = require("../../models");


router.post("/", (req, res) => {
    //expects 
    HighScore.create({
      score: req.body.score,
      quiz_id: req.body.quiz_id,
      user_id: req.body.user_id
    })
      .then((dbHighScoreData) => {
        console.log(dbHighScoreData);
        // res.body = dbQuizData;
        res.json(dbHighScoreData);
        
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err); //REST api needs status
      });
  });
  
  module.exports = router;