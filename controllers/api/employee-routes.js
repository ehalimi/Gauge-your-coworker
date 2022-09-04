const router = require('express').Router();
const { Employee, User, Comment } = require('../../models');
const auth = require('../../utils/authentication');

// get all Employee post at /api/Employees
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
    .then(dbEmployeeData => res.json(dbEmployeeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get specific Employee post via id using /api/Employees/:id
router.get('/:id', (req, res) => {
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
    attributes: ['id', 'comment_text', 'Employee_id', 'user_id', 'created_at'],

  }
]
  })
    .then(dbEmployeeData => {
      if (!dbEmployeeData) {
        res.status(404).json({ message: 'No Employee found with this id' });
        return;
      }
      res.json(dbEmployeeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router; 