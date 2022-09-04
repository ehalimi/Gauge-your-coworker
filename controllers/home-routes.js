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
        
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get employees by id so we can view the reviews left by coworkers
router.get('/employees/:id', (req, res) => {
  Employee.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'employee_name',
      'work_name',
      'position'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'Employee_id', 'created_at'],

      }
    ]
  })
    .then(dbEmployeeData => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: 'No employee found with this id' });
        return;
      }
      const employee = dbEmployeeData.get({ plain: true });
      // render employee page so we can view reviews
      res.render('single-comment', {
        employee
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
// render handlebar login page
  res.render('login');
});
// render the handlebar signup page
router.get('/signup', (req, res) => {
  res.render('signup');
})

module.exports = router;