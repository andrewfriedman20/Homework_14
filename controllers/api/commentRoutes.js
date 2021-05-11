//commentRoutes.js in controllers/api dirs

const router = require('express').Router();

const { Comment } = require('../../models');

const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
      Comment.findAll()
        .then((CommentInfodb) => res.json(CommentInfodb))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_content: req.body.comment_content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
  }
});

module.exports = router;