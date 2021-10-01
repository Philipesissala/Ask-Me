const Answer = require("../models/answer");
const Question = require("../models/Question");

module.exports = {
  async index(req, res) {
    const slug = req.params.slug;
    Question.findOne({
      where: { slug },
      raw: true,
    })
      .then((question) => {
        if (question != undefined) {
          Answer.findAll({
            where: { questionId: question.id },
            order: [["id", "DESC"]],
          }).then((answers) => {
            res.render("answer", { question, answers });
          });
        } else {
          res.redirect("/");
        }
      })
      .catch((error) => {
        console.log("Erro nivel findOne: " + error);
      });
  },

  async create(req, res) {
    const { body, questionId } = req.body;

    Answer.create({
      body,
      questionId,
    })
      .then(() => {
        res.redirect(`/question/${questionId}`);
      })
      .catch((error) => {
        res.send("Error" + error);
      });
  },
};
