const User = require('./User');
const BlogPost = require('./BlogPost');

User.hasMany(BlogPost, {
    foreignKey: 'creator_id',
});

BlogPost.belongsTo(User, {
    foreignKey: 'creator_id',
});

module.exports = { User, BlogPost };
