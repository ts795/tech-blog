const User = require('./User');
const BlogPost = require('./BlogPost');
const BlogComment = require('./BlogComment');

User.hasMany(BlogPost, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
    foreignKey: 'creator_id',
});

User.hasMany(BlogComment, {
    foreignKey: 'creator_id',
    onDelete: 'CASCADE',
});

BlogComment.belongsTo(User, {
    foreignKey: 'creator_id',
});

BlogPost.hasMany(BlogComment, {
    foreignKey: 'blog_post_id',
    onDelete: 'CASCADE',
});

BlogComment.belongsTo(BlogPost, {
    foreignKey: 'blog_post_id',
});


module.exports = { User, BlogPost, BlogComment };
