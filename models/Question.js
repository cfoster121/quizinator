const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer_a: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer_b: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer_c: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    answer_d: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    answer_correct: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quiz_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "quiz",
            key: "id"
        }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
  }
);

module.exports = Question;