import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import s from "../Admin/Cohortes/grupoPm.module.css"
import { connect, useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Modulo from "./modulo-alumno"



export default function CohorteModulo  () {
    const dispatch = useDispatch();
    const cohorte = useSelector((state) => state.cohorte.cohortes);
    const match = useRouteMatch();

    return (
        <div className={s.container + " " + s.margin}>
        <h2 className={s.titulo}>Cohortes</h2>
        {cohorte && cohorte.map((cohorte) => (
        <Button component= {Link} to= {`${match.url}/${cohorte.id}`}>{cohorte.nombre}</Button>
        ))}

        <Route path={`${match.path}/:cohorteid`}>
            <Modulo />
        </Route>
    </div>
    ) 
}