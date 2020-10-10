import React,{useEffect, useState} from "react"
import styles from "./registrarse.module.css"
import {useSelector, useDispatch} from "react-redux";
import {getUsuarios, searchUsuarios} from "../../store/actions/login"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, IconButton } from "@material-ui/core";
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ForwardIcon from '@material-ui/icons/ArrowForwardIos'
import {InputBase} from '@material-ui/core';
import {Search} from "@material-ui/icons"


export const TablaAlumnos = () => {
const [query, setQuery] = useState("");
const {user: {usuarios, pag, pags, limit, ActionType}} = useSelector(store  => store);
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getUsuarios());
},[])
useEffect(()=>{
    if(query)dispatch(searchUsuarios(query));
},[query])
const renderUsers = (usuarios) =>{
    if(!usuarios && !Array.isArray(usuarios)) return (
        <TableRow>
            <TableCell colSpan="3" style={{textAlign:"center"}}><CircularProgress /></TableCell>
        </TableRow>
    );
    if(!usuarios.length) return (
        <TableRow>
            <TableCell colSpan="3" style={{textAlign:"center"}}>Sin resultados</TableCell>
        </TableRow>
    )
    return usuarios.map(alumno => (
        <TableRow>
            <TableCell colSpan="2">
                {alumno.username}
            </TableCell>
            <TableCell>
                {alumno.rol}
            </TableCell>
        </TableRow>
    ))
}
const prevPag = () => {
    if(ActionType === "GET_USUARIOS") dispatch(getUsuarios(pag - 1))
    else dispatch(searchUsuarios(query, pag - 1))
}
const nextPag = () => {
    console.log(ActionType)
    if(ActionType === "GET_USUARIOS") dispatch(getUsuarios(pag + 1))
    else dispatch(searchUsuarios(query, pag + 1))
}
return (
        <div className={styles.alumnos}>
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableCell colSpan="3">
                    <div className={styles.searchBar}>
                        <div className={styles.search}>
                            <div className={styles.searchIcon}>
                                <Search/>
                            </div>
                            <InputBase
                            placeholder="Buscar Usuario…"
                            classes={{
                                root: styles.inputRoot,
                                input: styles.inputInput,
                            }}
                            onChange={(e) => setQuery(e.target.value.trim())}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </div>
                </TableCell>
            </TableHead>
            <TableHead>
                <TableCell variant="head" colSpan="2">
                    Usuario
                </TableCell>
                <TableCell variant="head">
                    Rol
                </TableCell>
            </TableHead>
            <TableBody>
                {renderUsers(usuarios)}
                    {pags > 10 && 
                        <TableRow>
                            {pag > 1 && 
                            <TableCell>
                                <IconButton onClick={prevPag}><BackIcon/></IconButton>
                            </TableCell>}
                            <TableCell>{`${pag} de ${Math.ceil(pags/ limit)}`}</TableCell>
                            {pag < Math.ceil(pags/ limit) && 
                            <TableCell>
                                <IconButton onClick={nextPag}><ForwardIcon/></IconButton>
                            </TableCell>}
                        </TableRow>
                    }
            </TableBody>
        </Table>
    </TableContainer>
        </div>
    )
}