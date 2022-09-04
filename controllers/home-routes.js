const router = require('express').Router();
const auth = require('../utils/authentication');
const { Employee, User, Comment } = require('../models');

// get all employees for the homepage
router.get('/', (req, res) => {
  Employee.findAll({
    attributes: [
      'id',
      'employee_name',
      'work_name',
      'position'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'Employee_id', 'user_id', 'created_at'],
   
      }
    ]
  })
    // map data to get content
    .then(dbEmployeeData => {
      const employees = dbEmployeeData.map(employee => employee.get({ plain: true }));
// render handlebar home page for this data. 
      res.render('homepage', {
        employees,
        // loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;