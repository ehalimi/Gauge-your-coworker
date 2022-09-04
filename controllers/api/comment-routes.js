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