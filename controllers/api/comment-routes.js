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
  
// delete comments - TODO add authentication in. 
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No Comment found with this id' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
