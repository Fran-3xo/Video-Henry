const {DataTypes} = require ("sequelize")

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        rol : {
            type: DataTypes.STRING,
            allowNull: true,
            validate:{
                isIn: {
                    args: [['director', 'alumno', '']],
                    msg: "Debe asignar un rol('director' o 'alumno)"
                }
            },
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        provider: {
            type: DataTypes.STRING,
            allowNull: true
        },
        providerId: {
            type: DataTypes.STRING,
            allowNull: true
        },
    })
}