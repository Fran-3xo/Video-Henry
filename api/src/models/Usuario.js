const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        rol : {
            type: DataTypes.ENUM ('alumno', 'instructor', 'pm', 'director'),
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        proceso: {
            type : DataTypes.INTEGER,
            defaultValues : 1,
            allowNull: true,
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: true
        },
        providerId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValues: true
        },
    })
}