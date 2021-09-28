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

routes.get("/question/:id", AnswerController.index);

routes.post("/answer", AnswerController.create);

module.exports = routes;
