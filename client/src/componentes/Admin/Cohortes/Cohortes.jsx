import React, { useState, useEffect } from 'react';
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import s from "./grupoPm.module.css"
import { connect, useSelector, useDispatch } from 'react-redux';
import {getCohorte} from "../../../store/actions/cohorte"
import { Button } from '@material-ui/core';
import FormCohorte from "./form_cohorte"
import TablaAlumnosCohorte from "./Alumnos_cohorte"

export default function Cohortes(props) {
    const dispatch = useDispatch();
    const cohorte = useSelector((state) => state.cohorte.cohortes);
    const history = useHistory();
    const match = useRouteMatch();
    useEffect(() => {
        // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
        dispatch(getCohorte());
    }, [])

    //const [RenderTable, setRenderTable] = useState(0);
 

    const renderCohort = function (id) {
        history.push(match.url + "/" + id)
    }


    return (
        <div className= {s.all}>
                
            <div className={s.container + " " + s.margin}>
                <h2 className={s.titulo}>Cohortes</h2>
                <Button variant= "contained" className={s.buttons} component={Link} to= {`${match.url}/agregar`}>+</Button>
                {cohorte && cohorte.map((cohorte) => (
                <Button component= {Link} to= {`${match.url}/${cohorte.id}`}>{cohorte.nombre}</Button>
                ))}
            </div>

            {/* RenderTable > 0 && <AddAlumno id={RenderTable} /> */}
            
            <Route exact path={`${match.path}/agregar`}>
                <FormCohorte />
            </Route>
            <Route exact path ={`${match.path}/alumnos/:cohorteId`}>
                    <TablaAlumnosCohorte />
            </Route>
        </div>
    );
}