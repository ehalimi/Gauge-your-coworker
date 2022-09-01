const Employee = require('./Employee');
const Workplace = require('./Workplace');
const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Employee, {
    foreignKey: 'user_id'
});

//TODO this is weird :), create employee/assocciation 
Employee.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Workplace.hasMany(Employee, {
    foreignKey: 'workplace_id',
    onDelete: 'SET NULL'
});

Employee.belongsTo(Workplace, {
    foreignKey: 'workplace_id',
    onDelete: 'SET NULL'
});

Employee.hasMany(Comment, {
    foreignKey: 'employee_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Employee, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


