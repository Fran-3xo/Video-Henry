const server = require("express").Router();
const { Clase } = require("../db");
const {Op} = require("sequelize");
const axios = require("axios");
//crea una clase
server.post("/", (req, res, next) => {
    axios.get("https://vimeo.com/api/oembed.json?url=" + req.body.link +  "&width=1024&height=480")
        .then(res => {
            return Clase.create({
                categoria: req.body.modulo || 'Otros',
                titulo: res.data.title,
                iframe: res.data.html,
                link: req.body.link,
                instructor: req.body.instructor,
                cohorte: req.body.cohorte,
                prev_image: res.data.thumbnail_url,
                video_id: res.data.video_id
            })
        })
        .then(clase => res.json(clase))
        .catch(err => next(err));
})
server.get("/video/:id", (req, res, next) =>{
    Clase.findOne({
        where:{
            video_id:req.params.id
        }
    })
        .then(clase => res.json(clase))
        .catch(err => next(err));
});
//trae la clase por query
server.get("/search/:query", (req, res, next) =>{
    Clase.findAll({
        where:{
            [Op.or]:[
                {
                    categoria : {
                        [Op.iLike]: "%" + req.params.query + "%"
                    },
                },
                {
                    titulo:{
                        [Op.iLike]: "%" + req.params.query + "%"
                    }
                }
            ]
        }
    })
        .then(clase => res.json(clase))
        .catch(err => next(err));
});
server.get("/categoria/:modulo/:limit", (req, res, next) => {
    Clase.findAndCountAll({
        where: {
            categoria: req.params.modulo
        },
        limit:48 * parseInt(req.params.limit)
    }).then(clase => res.json(clase))
        .catch(err => next(err));
});

module.exports = server;
