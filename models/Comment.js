//Comment.js in models dir

const { Model, DataTypes } = require('sequelize');


const sequelize = require('../config/connection');


class Comment extends Model {}


Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    comment_content: {
      type: DataTypes.STRING,
      allowNull: false,
           

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
     
      references: {
        key: 'id',
        model:'user'
      },

    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'id',
        model:'post'
      },
    },
  },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }

);

module.exports = Comment;
