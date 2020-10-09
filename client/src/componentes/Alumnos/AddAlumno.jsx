import React, { useState } from "react";
import axios from 'axios';
import s from "./registrarse.module.css"
import { Button, CssBaseline, TextField, FormHelperText } from '@material-ui/core';
import {Link, useRouteMatch, Route} from "react-router-dom"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { IconButton, Chip } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {postAlumno} from "../../store/actions/alumnos"
import {useDispatch} from "react-redux";
import {getAlumnos, dropUser, postDirector} from "../../store/actions/alumnos"


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        marginLeft: "8px",
        backgroundColor: "#ffff00",
        color: "#000000",
        
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function AddAlumno () {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    const classes = useStyles();
    const [alumnos, setAlumnos] = useState("");
    const [dropped, setDropped] = useState({
        open: false,
        alumnoId: ""
    });
    const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/gim;
    const handleAlumnIput = (e) =>{
        setAlumnos(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        dispatch(postAlumno(alumnos.match(regex)));
        setAlumnos("");
    }
    const handleDirector = (e) => {
        e.preventDefault();
        dispatch(postDirector(alumnos.match(regex)));
        setAlumnos("");
    }

    const handleDelete =  (e) => {
        e.preventDefault();
            dispatch(dropUser(alumnos.match(regex)))
        
    };
    return (
        <div>
            <h3>Agregá o elimina</h3>
            <Container component="main" maxWidth="xs">
                <form className={classes.form} noValidate>
                    <TextField  
                        value={alumnos}
                        type='text'
                        color="primary"
                        name="alumnos"
                        variant="outlined"
                        required
                        fullWidth
                        label="Alumnos"
                        multiline
                        autoFocus
                        className={s.margin}
                        onChange={handleAlumnIput}
                    />
                    {!!alumnos && !!alumnos.match(regex) && alumnos.match(regex).map(alumno => (
                        <Chip label={alumno} onDelete={() =>{
                            setAlumnos(alumnos.replace(alumno, "").trim())
                        }}/>
                    ))}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            onClick= {(e) => submit(e)}
                            >
                            Agregar Alumnos
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            onClick= {(e)=> handleDelete(e)}
                            >
                            Eliminar Alumnos
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            onClick= {(e) => handleDirector(e)}
                            >
                            Agregar administrador
                        </Button>
                </form>
            </Container>
        </div>
    )
}