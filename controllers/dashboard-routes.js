const router = require('express').Router();
const sequelize = require('../config/connection');
const { Employee, User, Comment } = require('../models');
cons = require('../utils/authentication');

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
// render handlebar dashboard for this data and new data. 
        res.render("dashboard", { employees, loggedIn: true });
     
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', (req, res) => {
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
        attributes: ['id', 'comment_text', 'employee_id', 'created_at'],

      }
    ]
  })
    .then(dbEmployeeData => {
      console.log(dbEmployeeData)
      if (!dbEmployeeData) {
        res.status(404).json({ message: 'No employee found with this id' });
        return;
      }
      const employee = dbEmployeeData.get({ plain: true });
      // render employee page so we can view reviews
      res.render('edit-employees', {
        employee,
        loggedIn: true 
        
      })
    })
    .catch(err => {
    
      res.status(500).json(err);
    });
});



module.exports = router;