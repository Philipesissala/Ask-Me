const express = require("express");
const routes = express.Router();

const Question = require("./models/Question");
const QuestionController = require("./controller/QuestionController");

const Answer = require("./models/answer");
const AnswerController = require("./controller/AnswerController");

routes.get("/", (req, res) => {
  Question.findAll({
    raw: true,
    order: [["id", "DESC"]],
    limit: 5,
  })
    .then((questions) => {
      res.render("index", { questions });
    })
    .catch((error) => {
      res.send("error");
    });
});

routes.get("/question", QuestionController.create);

routes.post("/question/save", QuestionController.save);

routes.get("/question/:slug", AnswerController.index);

routes.post("/answer", AnswerController.create);

routes.get("/page/:number", QuestionController.pagenate);

module.exports = routes;
