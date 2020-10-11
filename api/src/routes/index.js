const { Router } = require('express');
// import all routers;
const alumnosRouter = require('./alumnos.js');
const claseRouter = require ("./clase.js")
const {server : usuariosRouter, isAuth, isAdmin} = require ('./usuarios.js')
const router = Router();

// load each router on a route
router.use ("/clase", isAuth ,claseRouter)
router.use ('/user', usuariosRouter);
router.use('/alumnos', isAdmin, isAdmin ,alumnosRouter);
module.exports = router;
