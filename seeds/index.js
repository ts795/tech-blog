const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBlogPosts = require('./blogPostData');
const seedBlogComments = require('./blogPostCommentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    // Load user data for testing
    await seedUsers();

    // Load blog post data for testing
    await seedBlogPosts();

    // Load blog past data for testing
    await seedBlogComments();

    process.exit(0);
};

seedAll();