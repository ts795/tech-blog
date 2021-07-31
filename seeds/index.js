const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBlogPosts = require('./blogPostData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    // Load user data for testing
    await seedUsers();

    // Load blog post data for testing
    await seedBlogPosts();

    process.exit(0);
};

seedAll();