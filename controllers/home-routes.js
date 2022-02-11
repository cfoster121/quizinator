const router = require("express").Router();
const { User, Quiz, Question } = require("../models");
const sequelize = require("../config/connection");
//home route server homepage
router.get("/", (req, res) => {
  //we need to get all posts
  Quiz.findAll({
      // attributes: ["id", "title", "category", "user_id"],
      // include: [
      //   {
      //     model: User,
      //     as: "user",
      //     attributes: ["username"],
      //   }
      // ],
  })
    .then((dbQuizData) => {
      //serialize data
      if (!dbQuizData) {
        res.status(404).json({ message: "No Quizes Available" });
        return;
      }
      const quizzes = dbQuizData.map((Quiz) => Quiz.get({ plain: true })); // serialize all the posts
      // console.log(posts);
      res.render("home", {
        quizzes: quizzes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  console.log("Is logged in?", req.session.loggedIn);
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/createquiz", (req, res) => {
  console.log("Create a new quiz", req.session.loggedIn);
  res.render("quiz-create", { loggedIn: req.session.loggedIn });
});

router.get("/createquiz/question", (req, res) => {
  console.log("Create a new question", req.session.loggedIn);
  res.render("question-create", { loggedIn: req.session.loggedIn });
});


router.get("/:id", (req, res) => {
  //we need to get all posts
  Quiz.findByPk(req.params.id, {
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