import React, { useState } from "react";
import axios from 'axios';
import s from "./registrarse.module.css"
import { Button, TextField, FormControl, Select, MenuItem, InputLabel, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch} from "react-redux";
import {postClase} from "../../../store/actions/clases"
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
    formControl:{
        minWidth: 395,
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

export default function Form () {
    const classes = useStyles();
    const [modulo, setModulo] = useState("")
    const dispatch = useDispatch();
    const [link, setLink] = useState("")
    const [inputs, setInputs] = useState({
        instructor:"",
        cohorte:"",
    })
    const handleModuloChange = (e) =>{
        setModulo(e.target.value)
    }
    const handleLinkChange = (e) =>{
        setLink(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postClase({
            link: link,
            modulo,
            ...inputs
        }))
    }
    const handleInput = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField 
                            type='text'
                            color="primary"
                            name="link"
                            variant="outlined"
                            required
                            fullWidth
                            label="Link"
                            autoFocus
                            className={s.margin}
                            onChange={handleLinkChange}
                            helperText=""
                        />
                        <FormControl required variant="outlined" className={`${classes.formControl} ${s.margin}`}>
                            <InputLabel id="inputSelect">Modulo</InputLabel>
                            <Select labelId="inputSelect" label="Modulo" onChange={handleModuloChange}>
                                <MenuItem value="" selected disabled></MenuItem>
                                <MenuItem value="M1">M1</MenuItem>
                                <MenuItem value="M2">M2</MenuItem>
                                <MenuItem value="M3">M3</MenuItem>
                                <MenuItem value="M4">M4</MenuItem>
                            </Select>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                        <TextField 
                            type='text'
                            color="primary"
                            name="instructor"
                            variant="outlined"
                            fullWidth
                            label="Instructor"
                            autoFocus
                            className={s.margin}
                            onChange={handleInput}
                        />
                        <TextField 
                            type='text'
                            color="primary"
                            name="cohorte"
                            variant="outlined"
                            fullWidth
                            label="Cohorte"
                            autoFocus
                            className={s.margin}
                            onChange={handleInput}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            >
                            Agregar video
                        </Button>
                </form>
            </Container>
        </div>
    )
}