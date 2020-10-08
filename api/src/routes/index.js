const { Router } = require('express');
// import all routers;
const alumnosRouter = require('./alumnos.js');
const claseRouter = require ("./clase.js")
const usuariosRouter = require ('./usuarios.js')
const router = Router();

// load each router on a route
router.use ("/clase", claseRouter)
router.use ('/user', usuariosRouter);
router.use('/alumnos', alumnosRouter);
module.exports = router;
