const server = require("express").Router();
const {Usuario, Cohorte, Grupo} = require("../db");
const {Op, literal} = require("sequelize");
var nodemailer = require('nodemailer');
const {USER, PASS} = process.env;
//get de todos los alumnos
server.get("/", (req, res, next) =>{
    Usuario.findAll({
        attributes:["username", "proceso"],
        where:{
            rol: "alumno"
        }
    }).then(alumnos => res.json(alumnos))
      .catch(err => next(err));
})
//crea un usuario con solo email
server.post('/agregar', (req, res, next) => {
    const addUsers = req.body.users.map(user => {
        return Usuario.create({
            username: user,
            rol: 'alumno',
            active: true,
        })
    })
    Promise.all(addUsers).then(() => res.send('OK'))
    .catch( err => next(err))
})

module.exports = server;