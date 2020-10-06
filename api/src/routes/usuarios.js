const server = require('express').Router();
const {Usuario} = require ('../db.js')
const passport = require('passport');
const crypto = require("crypto");
//crear usuario
//http://localhost:3006/user/
server.get("/github/login", passport.authenticate("github", { scope: ["user:email"] }));
server.get("/github/cb", passport.authenticate("github", { failureRedirect: 'http://localhost:3000/failure_login' }), (req, res) => {
	res.redirect("http://localhost:3000/github_login");
});
//deslogueo de un usuario
server.get('/logout', (req, res) =>{
	req.logout();
	req.session.destroy();
	res.sendStatus(200);
})
//actualiza el rol de un usuario
server.put('/:id/rol', (req, res, next) => {
    const { id } = req.params;
    const { rol} = req.body;
    Usuario.update(
        {
		rol
		},
        { where: { id } }
    ).then((usuario) => {
        res.status(200).send(usuario);
    }).catch(next);
});
//actualiza informacion del usuario
server.put('/update/:id', (req, res) => {
	var newEmail = req.body.email;
	var {edad,localidad,nombre, apellido, image} = req.body;
	console.log(req.body);
	Usuario.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then(user => {
			user.update({
				nombre: nombre,
				apellido: apellido,
				email: newEmail,
				localidad: localidad,
				edad: edad,
				image
			});
			res.status(200).send(user);
		})
		.catch(err => {
			res.send('Usuario inexistente');
		});
});

//cambio de password
server.put('/:id/delete', (req,res)=>{
	const id= req.params.id
	Usuario.update({
		active: false
	}, {where:{
		id: id
	}}).then(response=>{
		res.send(response)
	}).catch(response=>{
		res.send(response)
	})
})
server.get("/me", (req, res, next) =>{
	if(!req.isAuthenticated()) return res.sendStatus(401);
	res.json(req.user);
})

module.exports = server;