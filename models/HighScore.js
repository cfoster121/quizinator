const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HighScore extends Model {}

HighScore.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    quiz_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "quiz",
            key: "id"
        }

    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }

    },
  },
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'highScore',
  }
);

module.exports = HighScore;
