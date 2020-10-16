const server = require('express').Router();
const {Usuario} = require ('../db.js')
const passport = require('passport');
const {Op} = require("sequelize");
const {CLIENT_URL} = process.env
//crear usuario
//http://localhost:3006/user/
function isAuth(req, res, next){
  if(req.isAuthenticated()) return next();
  return res.sendStatus(401);
}
function isAdmin(req, res, next){
  if(req.user.rol==="director") return next();
  return res.sendStatus(403);
}
server.get("/github/login", passport.authenticate("github", { scope: ["user:email"] }));
server.get("/github/cb", passport.authenticate("github"), (req, res) => {
	res.redirect(CLIENT_URL + "/Home");
});

server.get("/users/:limit/:pag", isAuth, isAdmin, (req, res, next) =>{
    Usuario.findAndCountAll({
        attributes:["username", "rol"],
        order:[["updatedAt","DESC"]],
        offset: -(parseInt(req.params.limit) - (parseInt(req.params.limit) * parseInt(req.params.pag))),
        limit:parseInt(req.params.limit)
    }).then(alumnos => res.json(alumnos))
        .catch(err => next(err));
})
server.get("/search/:query/:limit/:pag", isAuth, isAdmin, (req, res, next) =>{
    Usuario.findAndCountAll({
        attributes:["username", "rol"],
        where:{
            [Op.or]:[
                {
                    username:{
                        [Op.iLike]: "%" + req.params.query + "%"
                    }    
                },
                {
                    rol:{
                        [Op.iLike]: "%" + req.params.query + "%"
                    }    
                }
            ]
        },
        order:[["updatedAt","DESC"]],
        offset: -(parseInt(req.params.limit) - (parseInt(req.params.limit) * parseInt(req.params.pag))),
        limit:parseInt(req.params.limit)
    }).then(usuarios => res.json(usuarios))
        .catch(err => next(err));
})
//deslogueo de un usuario
server.get('/logout', (req, res) =>{
	req.logout();
	req.session.destroy();
	res.sendStatus(200);
})
//actualiza el rol de un usuario
server.put('/:id/rol', isAuth, isAdmin, (req, res, next) => {
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
server.get("/me", isAuth, (req, res, next) =>{
	res.json(req.user);
})

module.exports = {server, isAuth, isAdmin};