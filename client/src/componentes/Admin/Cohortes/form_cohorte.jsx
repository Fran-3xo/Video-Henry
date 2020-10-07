import React, { useState } from "react";
import axios from 'axios';
import s from "../Clase/registrarse.module.css"
import { Button, CssBaseline, TextField, FormHelperText } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';
import { useHistory } from "react-router-dom";

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




export default function FormCohorte () {
    const classes = useStyles();


    return (
            <Container component="main" maxWidth="xs">
                <h1>Agregá un cohorte</h1>
                    <form className={classes.form} noValidate>
                        <TextField  
                                type='text'
                                color="primary"
                                name="nombre"
                                variant="outlined"
                                required
                                fullWidth
                                label="Nombre del cohorte"
                                autoFocus
                                className={s.margin}
                        />
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                            Agregar cohorte
                        </Button>
                </form>
            </Container>
    )
}