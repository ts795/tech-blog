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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login', {
        pageDescription: 'The Tech Blog'
    });
});

// Route for signing up
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signup', {
        pageDescription: 'The Tech Blog'
    });
});

// Route for the user's dashboard
router.get('/dashboard', async (req, res) => {
    try {
        posts = [];
        if (req.session.loggedIn) {
            const postData = await Post.findAll({
                where: {
                    creator_id: req.session.loggedInId
                }
            });
            posts = postData.map((post) =>
                post.get({ plain: true })
            );
        }
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
            pageDescription: 'Your Dashboard'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;