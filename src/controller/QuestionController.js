const slug = require("slugify");
const Question = require("../models/Question");
const Answer = require("../models/answer");

module.exports = {
  async create(req, res) {
    await res.render("question");
  },

  async save(req, res) {
    const { title, description } = req.body;

    Question.create({
      title,
      description,
      slug: slug(title),
    })
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {
        console.log(`Erro ao salvar ${error}`);
      });
  },

  async pagenate(req, res) {
    const page = req.params.number;
    offset = (page - 1) * 5;
    let next;

    Question.findAndCountAll({
      limit: 5,
      offset,
      order: [["id", "DESC"]],
    }).then((questions) => {
      if (offset + 5 >= questions.count) {
        next = false;
      } else {
        next = true;
      }

      let results = {
        page: parseInt(page),
        next,
        questions,
      };
      res.render("page", { results });
    });
  },
};
