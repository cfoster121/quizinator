# quizinator

A quiz creation and website to take multiple quizzes! we wanted a website to be able to find quizzes based off category and number of times played. A site able to take Quizzes and save your highscore against others. where you can log in and make challengeing quizzes for others on your favorite topics.

- A post route used to createa user or log in.
```
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userid = dbUserData.id;
      req.session.username = dbUserData.username;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
```
- the user model for saving all relevent information about the user.
```
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  ```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [jawsDB](https://www.jawsdb.com/)
* [MySQL](https://www.mysql.com/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [Heroku](heroku.com)
* [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
* [Dotenv](https://github.com/motdotla/dotenv)
* [Sequelize](https://sequelize.org/)


## Deployed Link

* [See Live Site](https://stark-scrubland-48398.herokuapp.com/)

![startrek1](https://user-images.githubusercontent.com/91674571/154112133-8b671963-2025-4d8c-aa5e-eec753191e1d.gif)

![image](https://user-images.githubusercontent.com/91674571/154112148-9c4a6d6f-efa0-4e74-a992-cb1784eafdb3.png)

![image](https://user-images.githubusercontent.com/91674571/154112432-34cea3c7-2469-4072-b6c3-f32732e7fbd7.png)

![image](https://user-images.githubusercontent.com/91674571/154112538-21befe3d-02a1-4713-a6ab-565f6949854d.png)


## Authors

* **Garrett Corbin** 
- [Link to Portfolio Site](https://antieatingactivist.github.io/portfolio/)
- [Link to Github](https://github.com/antieatingactivist)
- [Link to LinkedIn](https://www.linkedin.com/in/garrett-corbin-7a7777227/)

* **Courtney Foster** 
- [Link to Portfolio Site](https://cfoster121.github.io/portfolio/)
- [Link to Github](https://github.com/cfoster121)
- [Link to LinkedIn](https://www.linkedin.com/in/courtney-foster-0b364575/)

* **Samuel Lutz** 
- [Link to Github](https://github.com/samuellutz)
- [Link to LinkedIn](https://www.linkedin.com/in/samuel-lutz-77138020b/)
- [Link to Portfolio Site](https://www.linkedin.com/in/samuel-lutz-77138020b/)


## License

This project is licensed under the MIT License 

## Acknowledgments

* Hat tip to Tailwind,
* Inspiration
* etc
