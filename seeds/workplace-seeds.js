const { Workplace } = require('../models');

const workplaceData = [
    {
        work_name: 'McDonalds'
    },
    {
        work_name: 'Starbucks'
    },
    {
        work_name: 'Google'
    },
    {
        work_name: 'Apple'
    },
    {
        work_name: 'Meta'
    }
];

const seedWorkplace = () => Workplace.bulkCreate(workplaceData);

module.exports = seedWorkplace;