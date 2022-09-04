const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const employeeRoutes = require('./employee-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/employees', employeeRoutes);
router.use('/comments', commentRoutes);

module.exports = router;