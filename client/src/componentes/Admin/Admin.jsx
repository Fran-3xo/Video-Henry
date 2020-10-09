import React, { useState } from 'react';
import styles from "./admin.module.css";
import { Link, useRouteMatch, Route } from 'react-router-dom';
import { List, ListItem, ListSubheader, ListItemText } from '@material-ui/core'
import AddAlumno from "../Alumnos/AddAlumno"
import Clase from "./Clase/Clase";
import { TablaAlumnos } from '../Alumnos/TablaAlumnos';

export default function Admin(){
    const match = useRouteMatch();
    return(
        <div className={styles.admin}>
            <List subheader={<ListSubheader>Administración</ListSubheader>} className={styles.menu}>
                <ListItem button component={Link} to={`${match.url}/Clases`}>
                    <ListItemText>Clases</ListItemText>
                </ListItem>
                <ListItem button component={Link} to={`${match.url}/agregar`}>
                    <ListItemText>Usuarios</ListItemText>
                </ListItem>
            </List>
            <Route exact path={`${match.path}/Clases`}>
                <Clase/>
            </Route>
            <Route path={`${match.path}/agregar`}>
                <AddAlumno/>
                <TablaAlumnos/>
            </Route>
        </div>
    );
}