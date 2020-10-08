const {DataTypes} = require ("sequelize")
module.exports = (sequelize) => {
    const Clase = sequelize.define ('clase', {
        video_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        modulo : {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isIn: {
                    args: [['M1', 'M2', 'M3', 'M4']],
                    msg: "Debe pertenecer a algún modulo('M1', 'M2', 'M3', 'M4')"
                }
            }
        },
        titulo : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        iframe : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prev_image:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}

