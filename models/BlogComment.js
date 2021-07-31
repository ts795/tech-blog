const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogComment extends Model { }

BlogComment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        blog_post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'blog_post',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog_comment',
    }
);

module.exports = BlogComment;
