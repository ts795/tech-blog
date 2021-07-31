const { BlogPost } = require('../models');

const blogPostData = [
    {
        title: "Javascript",
        contents: "A programming language for dynamic web content and back end servers",
        creator_id: 1
    },
    {
        title: "Express",
        contents: "A package for a node JS server",
        creator_id: 2
    }
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPosts;
