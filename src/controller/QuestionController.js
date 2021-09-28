const Question = require("../models/Question");

module.exports = {
  async create(req, res) {
    await res.render("question");
  },

  async save(req, res) {
    const { titulo, descricao } = req.body;

    Question.create({
      titulo,
      descricao,
    })
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {
        console.log(`Erro ao salvar ${error}`);
      });
  },
};
