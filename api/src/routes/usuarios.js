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

server.get("/", (req, res, next) =>{
    Usuario.findAll({
        attributes:["username", "rol"],
        where:{
            active: true
        }
    }).then(alumnos => res.json(alumnos))
        .catch(err => next(err));
})
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
server.get("/me", (req, res, next) =>{
	if(!req.isAuthenticated()) return res.sendStatus(401);
	res.json(req.user);
})

module.exports = server;