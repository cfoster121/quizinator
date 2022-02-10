const router = require("express").Router();
const { User, Quiz, Question } = require("../models");
const sequelize = require("../config/connection");
//home route server homepage
router.get("/", (req, res) => {
    //we need to get all posts
    Quiz.findAll({
    //   attributes: ["id", "title", "body", "user_id"],
    //   include: [
    //     {
    //       model: User,
    //       as: "user",
    //       attributes: ["username"],
    //     }
    //   ],
    })
      .then((dbQuizData) => {
        //serialize data
        if (!dbQuizData) {
          res.status(404).json({ message: "No Quizes Available" });
          return;
        }
        // const quiz = dbQuizData.map((post) => post.get({ plain: true })); // serialize all the posts
        // console.log(posts);
        res.render("home");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get("/:id", (req, res) => {
  //we need to get all posts
  Quiz.findByPk(req.params.id,{
    // attributes: ["id", "title", "body", "user_id"],
    include: [
      {
        model: Question,
      },
      {
        model: User,
        attributes: ["username"]
      },
    ],
  })
  .then((dbQuizData) => {
    res.json(dbQuizData);
  })
    // .then((dbQuizData) => {
    //   //serialize data
    //   if (!dbQuizData) {
    //     res.status(404).json({ message: "No Quiz Available" });
    //     return;
    //   }
    //   const quiz = dbQuizData.get({ plain: true }) // serialize all the posts
    //   console.log(quiz);
    // //   res.render("home", { quiz, loggedIn: req.session.loggedIn });
    // })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/category/:category", (req, res) => {
    //we need to get all posts
    Quiz.findAll({
        where: {
          category: req.params.category
        },
      })
    .then((dbQuizData) => {
      res.json(dbQuizData);
    })
      // .then((dbQuizData) => {
      //   //serialize data
      //   if (!dbQuizData) {
      //     res.status(404).json({ message: "No Quiz Available" });
      //     return;
      //   }
      //   const quiz = dbQuizData.get({ plain: true }) // serialize all the posts
      //   console.log(quiz);
      // //   res.render("home", { quiz, loggedIn: req.session.loggedIn });
      // })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
module.exports = router;