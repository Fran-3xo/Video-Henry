const { Router } = require('express');
// import all routers;
const alumnosRouter = require('./alumnos.js');
const gruposRouter = require('./grupos.js');
const cohortesRouter = require('./cohortes.js');
const claseRouter = require ("./clase.js")
const usuariosRouter = require ('./usuarios.js')
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use ("/clase", claseRouter)
router.use ('/user', usuariosRouter);
router.use('/alumnos', alumnosRouter);
router.use('/grupos', gruposRouter);
router.use('/cohortes', cohortesRouter);

module.exports = router;
