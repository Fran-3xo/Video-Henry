import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import styles from "./modulo.module.css"
import { connect, useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Modulo from "./modulo-alumno"



export default function CohorteModulo  () {
    const dispatch = useDispatch();
    const cohorte = useSelector((state) => state.cohorte.cohortes);
    const match = useRouteMatch();

    return (
        <div>
        <h1 className={styles.titulo}>Cohortes</h1>
        {cohorte && cohorte.map((cohorte) => (
        <Button component= {Link} to= {`${match.url}/${cohorte.id}`} variant="contained" className={styles.botones}>{cohorte.nombre}</Button>
        ))}

        <Route path={`${match.path}/:cohorteid`}>
            <Modulo />
        </Route>
    </div>
    ) 
}