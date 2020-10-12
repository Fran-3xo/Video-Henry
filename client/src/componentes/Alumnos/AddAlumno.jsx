import React, { useState } from "react";
import s from "./registrarse.module.css"
import { Button, TextField, Snackbar } from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Chip } from '@material-ui/core';
import {postAlumno} from "../../store/actions/alumnos"
import {useDispatch, useSelector} from "react-redux";
import { dropUser, postDirector, closeAlerts} from "../../store/actions/alumnos"


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
    const classes = useStyles();
    const {alumnos: {success, success_msg, err_msg}} = useSelector(store => store);
    const [alumnos, setAlumnos] = useState("");
    const [error, setError] = useState({
        touched:false,
        msg:""
    })
    const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/gim;
    const handleAlumnIput = (e) =>{
        setAlumnos(e.target.value);
        if(!!alumnos.trim().match(regex) && !!alumnos.trim().match(regex).length) setError({...error, msg:""})
    }

    const submit = (e) => {
        e.preventDefault();
        if(!error.msg && !!alumnos.trim().match(regex) && !!alumnos.trim().match(regex).length){
            dispatch(postAlumno(alumnos.trim().match(regex)));
            setAlumnos("");
        }else setError({...error, msg:"Debe ingresar usuario/s"})
    }
    const handleDirector = (e) => {
        e.preventDefault();
        if(!error.msg && !!alumnos.trim().match(regex) && !!alumnos.trim().match(regex).length){
            dispatch(postDirector(alumnos.match(regex)))
            setAlumnos("");
        }else setError({...error, msg:"Debe ingresar usuario/s"})
    }
    const handleError = (e) => {
        if(!e.target.value.trim()) setError({...error, msg:"Debe ingresar usuario/s"})
        else if(!alumnos.trim().match(regex)) setError({...error, msg:"Debe ingresar un usuario de GitHub ex: atralice"})
        else if (!alumnos.trim().match(regex).length) setError({...error, msg:"Debe separar usuarios por Enter"})
    }
    const handleDelete =  (e) => {
        e.preventDefault();
        if(!error.msg && !!alumnos.trim().match(regex) && !!alumnos.trim().match(regex).length){
            dispatch(dropUser(alumnos.match(regex)))
            setAlumnos("");
        }else setError({...error, msg:"Debe ingresar usuario/s"})
            
        
    };
    return (
        <div>
            <Snackbar open={!!err_msg} anchorOrigin={{vertical:"top", horizontal:"center"}}>
                <Alert variant="filled" severity="error" onClose={() => dispatch(closeAlerts())}>{err_msg}</Alert>
            </Snackbar>
            <Snackbar open={success} anchorOrigin={{vertical:"top", horizontal:"center"}}>
                <Alert variant="filled" severity="success" onClose={() => dispatch(closeAlerts())}>{success_msg}</Alert>
            </Snackbar>
            <h3>Agregá o elimina</h3>
            <Container component="main" maxWidth="xs">
                <form className={classes.form} noValidate>
                    <TextField  
                        value={alumnos}
                        error={!!error.msg}
                        type='text'
                        color="primary"
                        name="alumnos"
                        variant="outlined"
                        fullWidth
                        label="Alumnos"
                        multiline
                        className={s.margin}
                        onBlur={handleError}
                        onFocus={()=> setError({...error, touched:true})}
                        onChange={handleAlumnIput}
                        helperText={!!error.msg && error.msg}
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
                            Eliminar Usuarios
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