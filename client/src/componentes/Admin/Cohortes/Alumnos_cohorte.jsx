import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import s from "./grupoPm.module.css"
import { connect, useSelector, useDispatch } from 'react-redux';
import {getAlumnosid} from "../../../store/actions/alumnos"
import { Button } from '@material-ui/core';
import FormCohorte from "./form_cohorte"

    export default function TablaAlumnosCohorte({id}) {
        const dispatch = useDispatch();
        const cohorte = useSelector((state) => state.cohorte.cohortes);
        const alumnos = useSelector((state) => state.alumnos.alumnos_cohorte);
        useEffect(() => {
            // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
            dispatch(getAlumnosid(id))
        }, [id])
        return (
            <div className={s.container}>
            <div className={s.grid}>
            <div className={s.letra}> Nombre </div>
            </div>
            {alumnos && alumnos.map((alumnos) => (
                    <div className={s.grid}>
                    <div className={s.letra}> {alumnos.nombre} </div>
                    
                </div>
            ))}
        </div>
        )
}