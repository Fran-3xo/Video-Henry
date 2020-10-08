import React,{useEffect} from "react"
import styles from "./registrarse.module.css"
import {useSelector, useDispatch} from "react-redux";
import {getAlumnos} from "../../store/actions/alumnos"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Container, TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';



export const TablaAlumnos = () => {

const {alumnos: {alumnos}} = useSelector(store  => store);
const dispatch = useDispatch();
const [open, setOpen] = React.useState(false);
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
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



useEffect(()=>{
    dispatch(getAlumnos());
},[])

return (
        <div className={styles.alumnos}>
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                
                <TableCell variant="head">
                    Nombre de usuario
                </TableCell>
            </TableHead>
            <TableBody>
                {alumnos.map(alumno => (
                <TableRow>
                        <TableCell>
                            {alumno.username}
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    </TableContainer>
        </div>
    )
}