const { Employee } = require('../models');

const employeedata = [
    {
        employee_name: 'Maxwell Wilets',
        workplace_id: 1,
        position: 'Manager'
    },
    {
        employee_name: 'Morgan Holcomb.',
        workplace_id: 3,
        position: 'Developer'
    },
    {
        employee_name: 'Hieu Le',
        workplace_id: 4,
        position: 'Salesperson'
    },
    {
        employee_name: 'Ema Halimi',
        workplace_id: 2,
        position: 'Lead'
    },
    {
        employee_name: 'Thais Cailet',
        workplace_id: 3,
        position: 'Waitress'
    },
    {
        employee_name: 'Brandon Gaitlin',
        workplace_id: 4,
        position: 'Lawyer'
    },
    {
        employee_name: 'Bradley Boyd',
        workplace_id: 5,
        position: 'Chef'
    },
];

const seedEmployees = () => Employee.bulkCreate(employeedata);

module.exports = seedEmployees;
