const router = require('express').Router();

const employeeRoutes = require('./employee-routes.js');
// const commentRoutes = require('./comment-routes');

router.use('/employees', employeeRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;