const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const morgan = require('morgan');
const routes = require('./routes/index.js');
const passport = require('passport');
const cors = require('cors');
const GitHubStrategy = require('passport-github2').Strategy;
const {Usuario, conn} = require('./db.js');
const { 
  GH_ID,
  GH_SECRET,
} = process.env
const server = express();
server.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: "Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
  methods: "GET, POST, OPTIONS, PUT, DELETE",
}));
server.name = 'API';
passport.use(new GitHubStrategy({
  clientID: GH_ID,
  clientSecret: GH_SECRET,
  callbackURL: "http://localhost:3006/user/github/cb",
  scope: ["user:email"]
},async (accessToken, refreshToken, profile, done) =>{
  console.log(profile);
  try{
    const usuario = await Usuario.findOne({
      where: { username: profile.username, active: true },
    })
    if(!usuario) return done(null, false);
    if(!usuario.provider && !usuario.providerId) {
      usuario.provider = profile.provider;
      usuario.providerId = profile.id;
      await usuario.save();
    }
    return done(null, usuario);
  }
  catch(err){
    done(err)
  }
}))
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(session({
  secret: 'secret',
  store: new SequelizeStore({
    db: conn,
    checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
    expiration: 24 * 60 * 60 * 1000
  }),
  resave: false,
  saveUninitialized: false,
}));
server.use(passport.initialize());
server.use(passport.session());
passport.serializeUser(function(user, done) {
  return done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  Usuario.findByPk(id)
  .then(user=>done(null, user))
  .catch(err => done(err))
});
server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  return res.status(status).send(message);
});

module.exports = server;
