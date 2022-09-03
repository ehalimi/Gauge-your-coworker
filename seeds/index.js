const seedEmployees = require('./employee-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedWorkplace = require('./workplace-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    
    await seedEmployees();

    await seedUsers();

    await seedComments();

    await seedWorkplace();

    process.exit(0);

}

seedAll();