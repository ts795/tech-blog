const { BlogComment } = require('../models');

const blogCommentData = [
    {
        comment: "Nice Description",
        creator_id: 2,
        blog_post_id: 1
    },
    {
        comment: "Thanks for the information",
        creator_id: 1,
        blog_post_id: 2
    }
];

const seedBlogComments = () => BlogComment.bulkCreate(blogCommentData);

module.exports = seedBlogComments;
