const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET the homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({});
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
            pageDescription: 'The Tech Blog'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;