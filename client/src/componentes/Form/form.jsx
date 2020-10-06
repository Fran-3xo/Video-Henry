import React, { useState } from "react";
import axios from 'axios';
import s from "./registrarse.module.css"
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

export default function Form () {
    const classes = useStyles();

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5">
                    Agregar un nuevo video
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField color='secondary'
                                type='text'
                                color='secondary'
                                name="clase"
                                variant="outlined"
                                required
                                fullWidth
                                label="Clase"
                                autoFocus
                                className={s.margin}
                    />
                        <TextField color='secondary'
                                type='text'
                                color='secondary'
                                name="link"
                                variant="outlined"
                                required
                                fullWidth
                                label="Link"
                                autoFocus
                                className={s.margin}
                    />
                        <TextField color='secondary'
                                type='text'
                                color='secondary'
                                name="modulo"
                                variant="outlined"
                                required
                                fullWidth
                                label="Modulo"
                                autoFocus
                                className={s.margin}
                    />
                        <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                            Agregar video
                        </Button>
                </form>
            </Container>
        </div>
    )
}