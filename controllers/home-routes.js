const router = require("express").Router();
const { User, Quiz, Question, HighScore } = require("../models");
const sequelize = require("../config/connection");

//Home route server homepage
router.get("/", (req, res) => {
  
  //Display all quizzes on home page
  Quiz.findAll({
      attributes: ["id", "title", "category", "user_id"],
      include: [
        {
          model: User,
          as: "user",
          attributes: ["username"],
        }
      ],
  })
    .then((dbQuizData) => {
      //Serialize data
      if (!dbQuizData) {
        res.status(404).json({ message: "No Quizes Available" });
        return;
      }
      const quizzes = dbQuizData.map((Quiz) => Quiz.get({ plain: true })); 
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

//Display quizzes by category
router.get("/bycategory/:category", (req, res) => {
  Quiz.findAll({
      attributes: ["id", "title", "category", "user_id"],
      where: {
        category: req.params.category
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["username"],
        }
      ],
  })
    .then((dbQuizData) => {
      //Serialize data
      if (!dbQuizData) {
        res.status(404).json({ message: "No Quizes Available" });
        return;
      }
      const quizzes = dbQuizData.map((Quiz) => Quiz.get({ plain: true }));
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

//If user is not logged in, render login page when selected
router.get("/login", (req, res) => {
  console.log("Is logged in?", req.session.loggedIn);
  res.render("login", { loggedIn: req.session.loggedIn });
});

//If user is logged in, render create quiz page when selected
router.get("/createquiz", (req, res) => {
  console.log("Create a new quiz", req.session.loggedIn);
  res.render("quiz-create", { loggedIn: req.session.loggedIn });
});

//If user is logged in, render page to create new questions when user is creating a new quiz
router.get("/createquiz/question/:id", (req, res) => {
  console.log("Create a new question", req.session.loggedIn);
  res.render("question-create", { 
    loggedIn: req.session.loggedIn,
    quiz_id: req.params.id
  });
});

//Render high score page by quiz ID
router.get("/highscore/:id", (req, res) => {
  HighScore.findAll({
    where: {
      quiz_id: req.params.id
    },
    limit: 10,
    order: [['score', 'DESC']],
    include: [
      {
        model: User,
      },{
        model: Quiz,
        include: [Question]
      }
    ]
  })
    .then((dbHighScoreData) => {
      if (!dbHighScoreData) {
        res.status(404).json({ message: "No High Scores Available" });
        return;
      }
      const highscores = dbHighScoreData.map((HighScore) => HighScore.get({ plain: true }));
      console.log(highscores);
      res.render("highscore", { 
        highscores: highscores,
        loggedIn: req.session.loggedIn 
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Display quizzes that user has created
router.get("/dashboard", (req, res) => {
  Quiz.findAll({
    where: {user_id: req.session.userid},
      attributes: ["id", "title", "category", "user_id"],
  })
    .then((dbQuizData) => {
      //Serialize data
      if (!dbQuizData) {
        res.status(404).json({ message: "No Quizes Available" });
        return;
      }
      const quizzes = dbQuizData.map((Quiz) => Quiz.get({ plain: true }));
      res.render("dashboard", {
        quizzes: quizzes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get("/:id", (req, res) => {
  //we need to get all posts
  Quiz.findByPk(req.params.id, {
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
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Display quiz questions when user selects a quiz to take
router.get("/viewquiz/:id", (req, res) => {
  Quiz.findByPk (req.params.id,{
    include: [
      {
        model: User,
        as: "user",
        attributes: ["username"],
      },
      {
        model: Question,
      },
    ],
  })
    .then((dbQuizData) => {
      //Serialize data
      if (!dbQuizData) {
        res.status(404).json({ message: "No Quiz Available" });
        return;
      }
      const quiz = dbQuizData.get({ plain: true }); 
      const myQuiz = Quiz.user_id == req.session.user_id;
      res.render("single-quiz", {
        quiz,
        loggedIn: req.session.loggedIn,
        currentUser: myQuiz,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;