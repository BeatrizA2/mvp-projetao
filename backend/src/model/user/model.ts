import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

export const UsersModel = sequelize.define('USERS', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
