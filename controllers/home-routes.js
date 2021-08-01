const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET the homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                }]
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );

        for (var idx = 0; idx < posts.length; idx++) {
            posts[idx].dateStringForPost = posts[idx].createdAt.toLocaleDateString();
        }
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

        // Convert the date to a string to display in the template
        for (var idx = 0; idx < posts.length; idx++) {
            posts[idx].dateStringForPost = posts[idx].createdAt.toLocaleDateString();
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

// Route for the form to create a new blog post
router.get('/new-blog-post', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('newBlogPost', {
        pageDescription: 'Your Dashboard',
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;