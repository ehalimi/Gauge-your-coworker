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

// router.get("/new", (req, res) => {
//     res.render("new-comment", {
//       layout: "dashboard"
//     });
//   });

// router.get('/edit/:id', (req, res) => {
//   Comment.findByPk(req.params.id)
//     .then(dbCommentData => {
//       if (dbCommentData) {
//         const post = dbCommentData.get({ plain: true });

//         res.render("edit-post", {
//             layout: "dashboard",
//             post
//           });
//         } else {
//           res.status(404).end();
//         }
//       })
//       .catch(err => {
//         res.status(500).json(err);
//       });
//   });  


module.exports = router;