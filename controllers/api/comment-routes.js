const router = require('express').Router();
const { Comment } = require('../../models');
const auth = require('../../utils/authentication');
// get all comments via /api/comments
router.get('/', (req, res) => {
  Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post comments via /api/comments,TODO add in authentication
router.post('/', (req, res) => {
    Comment.create({
      employee_id: req.body.employee_id,
      comment_text: req.body.comment_text
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });