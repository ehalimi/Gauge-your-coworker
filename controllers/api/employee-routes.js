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
// // get specific Employee post via id using /api/Employees/:id
// router.get('/:id', (req, res) => {
//   Employee.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'Employee_content',
//       'title',
//       'created_at'
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'Employee_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbEmployeeData => {
//       if (!dbEmployeeData) {
//         res.status(404).json({ message: 'No Employee found with this id' });
//         return;
//       }
//       res.json(dbEmployeeData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// // add a Employee post via api/Employees - making sure user is logged in with auth
// router.post('/', auth, (req, res) => {

//   Employee.create({
//     title: req.body.title,
//     Employee_content: req.body.Employee_content,
//     user_id: req.session.user_id
//   })
//     .then(dbEmployeeData => res.json(dbEmployeeData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// // edit Employee post via its id api/Employees/:id, again insuring user is signed in
// router.put('/:id', auth, (req, res) => {
//   Employee.update(req.body,
//     {
//       where: {
//         id: req.params.id
//       }
//     }
//   )
//     .then(dbEmployeeData => {
//       if (!dbEmployeeData) {
//         res.status(404).json({ message: 'No Employee found with this id' });
//         return;
//       }
//       res.json(dbEmployeeData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// // allows user to delete Employee posting via its id api/Employees/:id
// router.delete('/:id', auth, (req, res) => {
//   console.log('id', req.params.id);
//   Employee.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbEmployeeData => {
//       if (!dbEmployeeData) {
//         res.status(404).json({ message: 'No Employee found with this id' });
//         return;
//       }
//       res.json(dbEmployeeData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
