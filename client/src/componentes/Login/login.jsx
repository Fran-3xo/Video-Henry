import React from "react";
import { IconButton, Snackbar } from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import styles from "./login.module.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {useSelector, useDispatch} from 'react-redux';
import {closeUserAlert} from "../../store/actions/login";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor:"#000000c7",
        color: "#ffffff",
        width: "20%"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      color: "#ffff00"
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Login(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const {REACT_APP_API_URL} = process.env
    const {user:{logged}} = useSelector(store => store);
    return(
        <div className={styles.login}>
          <Snackbar open={typeof logged==="string"} anchorOrigin={{ vertical: "top", horizontal: "center"}}>
            <Alert severity="error" variant="filled" onClose={() => dispatch(closeUserAlert())}>Usuario No autorizado</Alert>
          </Snackbar>
          <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title}  gutterBottom>
                Bienvenido a Henry Videos
            </Typography>
            <Typography variant="h5" component="h2">
                Iniciá sesión con GitHub
            </Typography>
            <Typography variant="body2" component="p">
                Solo usuarios registrados
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton variant="outlined" href={`${REACT_APP_API_URL}/user/github/login`} className={styles.boton} size= "medium"><GitHubIcon/></IconButton>
          </CardActions>
        </Card>
        </div>
    );
}