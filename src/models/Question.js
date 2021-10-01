const Sequelize = require("sequelize");
const Answer = require("../models/answer");
const connection = require("../database/database");

const Question = connection.define("questions", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  slug: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Answer.belongsTo(Question)
Question.hasMany(Answer);

//Question.sync({ force: true });

module.exports = Question;
