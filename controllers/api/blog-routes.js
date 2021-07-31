const router = require('express').Router();
const { Post } = require('../../models');

// CREATE new blog post
router.post('/new', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            contents: req.body.contents,
            creator_id: req.session.loggedInId
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;