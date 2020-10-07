import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import s from "./grupoPm.module.css"
import { connect, useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core';
import FormCohorte from "./form_cohorte"



    export default function TablaAlumnos() {
        const dispatch = useDispatch();
        
        
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