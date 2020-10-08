const server = require("express").Router();
const {Usuario, Cohorte, Grupo} = require("../db");
const {Op, literal} = require("sequelize");
var nodemailer = require('nodemailer');
const {USER, PASS} = process.env;
//get de todos los alumnos


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

// borra un alumno
/* server.put('/:id/delete', (req,res)=>{
	const id= req.params.id
	Usuario.update({
		active: false
	}, {where:{
		username: id
	}}).then(response=>{
		res.send(response)
	}).catch(err => next(err)
	)
}) */

server.put ("/delete", (req,res,next) => {
    const putAlumno= req.body.users.map((usuarios)=>{
        return Usuario.update({
            active: false
        }, {
            where: {
                username: usuarios
            }
        })
    })
    Promise.all(putAlumno).then(()=> res.send("USUARIO ELIMINADO"))
    .catch(err => next(err))
})

//agrega un administrador
server.post('/agregar/director', (req, res, next) => {
    const addEmails = req.body.users.map(email => {
        return Usuario.create({
            username: email,
            rol: 'director',
            active: true,
        })
    })
    Promise.all(addEmails).then(() => res.send('OK'))
    .catch( err => next(err))
})

module.exports = server;