import { DataTypes } from 'sequelize'
import { sequelize } from '../db'

export const CaseModel = sequelize.define('CASES', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    sonId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fatherId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    motherId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    process: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
})
