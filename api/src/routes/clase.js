const server = require("express").Router();
const { Clase } = require("../db");
const {Op} = require("sequelize");
const axios = require("axios");
const {isAdmin} = require("./usuarios");
//crea una clase
server.post("/", isAdmin, (req, res, next) => {
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
server.get("/videos/:pag/:limit", (req, res, next) =>{
    Clase.findAndCountAll({
        attributes:["video_id","titulo"],
        order:[["updatedAt","DESC"]],
        offset: -(parseInt(req.params.limit) - (parseInt(req.params.limit) * parseInt(req.params.pag))),
        limit:parseInt(req.params.limit)
    })
        .then(clase => res.json(clase))
        .catch(err => next(err));
});
//trae la clase por query
server.get("/search/:query/:limit", (req, res, next) =>{
    Clase.findAndCountAll({
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
        },
        limit:48 * parseInt(req.params.limit)
    })
        .then(clase => res.json(clase))
        .catch(err => next(err));
});
server.put("/delete", isAdmin, (req, res, next) =>{
    Clase.destroy({
        where:{
            video_id:{
                [Op.in]: req.body.videos
            }
        }
    }).then(() => res.sendStatus(200))
    .catch(err => next(err));
})
server.get("/search_admin/:query/:pag/:limit", (req, res, next) =>{
    Clase.findAndCountAll({
        attributes:["video_id","titulo"],
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
                },
                {
                    video_id:{
                        [Op.iLike]: "%" + req.params.query + "%"
                    }
                }
            ]
        },
        order:[["updatedAt","DESC"]],
        offset: -(parseInt(req.params.limit) - (parseInt(req.params.limit) * parseInt(req.params.pag))),
        limit:parseInt(req.params.limit)
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
