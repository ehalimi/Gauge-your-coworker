const { Employee } = require('../models');

const employeedata = [
    {
        employee_name: 'Maxwell Wilets',
        workplace_id: 1,
        work_name: 'McDonalds',
        position: 'Manager'
    },
    {
        employee_name: 'Morgan Holcomb.',
        workplace_id: 3,
        work_name: 'Starbucks',
        position: 'Developer'
    },
    {
        employee_name: 'Hieu Le',
        workplace_id: 4,
        work_name: 'Google',
        position: 'Salesperson'
    },
    {
        employee_name: 'Ema Halimi',
        workplace_id: 2,
        work_name: 'Apple',
        position: 'Lead'
    },
    {
        employee_name: 'Thais Cailet',
        workplace_id: 3,
        work_name: 'Meta',
        position: 'Waitress'
    },
    {
        employee_name: 'Brandon Gaitlin',
        workplace_id: 4,
        work_name: 'Google',
        position: 'Lawyer'
    },
    {
        employee_name: 'Bradley Boyd',
        workplace_id: 5,
        work_name: 'Apple',
        position: 'Chef'
    },
];

const seedEmployees = () => Employee.bulkCreate(employeedata);

module.exports = seedEmployees;
