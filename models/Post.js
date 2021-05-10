//Post.js in models dir
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

//This creates model for post, then subsequently creates and defines its reqisite fields
class Post extends Model {}


Post.init(
    
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        },
       
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
     
      },
    },
    {
       sequelize,
       freezeTableName: true,
       underscored: true,
       modelName: 'post'
    }
  
  );
  
  module.exports = Post;
