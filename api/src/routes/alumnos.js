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
    const addEmails = req.body.users.map(email => {
        return Usuario.create({
            username: email,
            rol: 'alumno',
            active: true,
        })
    })
    Promise.all(addEmails).then(() => res.send('OK'))
    .catch( err => next(err))
})

//le cambia el proceso a un alumno
server.put("/modulo" , (req,res,next) => {
    Usuario.findByPk(req.body.usuarioId)
    .then(usuario => {usuario.proceso = req.body.proceso;
    return usuario.save()
    }).then(usuario => res.json(usuario))
    .catch(err => next(err))
})
//trae los alumnos de un modulo
server.get("/:proceso", (req, res, next) =>{
    Usuario.findAll({
        where:{
            proceso: req.params.proceso,
        }
    }).then(usuario => res.json(usuario))
        .catch(err => next(err));
});

module.exports = server;