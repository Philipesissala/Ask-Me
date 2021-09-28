const Answer = require("../models/answer");
const Question = require("../models/Question");

module.exports = {
  async index(req, res) {
    const id = req.params.id;
    Question.findOne({
      where: { id },
      raw: true,
    })
      .then((question) => {
        if (question != undefined) {
          Answer.findAll({
            where: { perguntaId: question.id },
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
    const { corpo, perguntaId } = req.body;

    Answer.create({
      corpo,
      perguntaId,
    })
      .then(() => {
        res.redirect(`/question/${perguntaId}`);
      })
      .catch((error) => {
        res.send("Error" + error);
      });
  },
};
