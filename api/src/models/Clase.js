const {DataTypes} = require ("sequelize")
module.exports = (sequelize) => {
    const Clase = sequelize.define ('clase', {
        video_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoria : {
            type: DataTypes.STRING,
            allowNull: true,
            validate:{
                isIn: {
                    args: [['M1', 'M2', 'M3', 'M4','Workshop','Talks','Otros']],
                    msg: "Debe pertenecer a algún modulo('M1', 'M2', 'M3', 'M4')"
                }
            }
        }, 
        instructor:{
            type: DataTypes.STRING,
            allowNull: true
        },
        cohorte:{
            type: DataTypes.STRING,
            allowNull: true
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
            allowNull: true
        }
    })
}

