const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workplace extends Model {};

Workplace.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        work_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    }
)

module.exports = Workplace;

