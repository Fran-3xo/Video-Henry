import React, { useState } from 'react';
import styles from "./admin.module.css";
import { Link, useRouteMatch, Route } from 'react-router-dom';
import { List, ListItem, ListSubheader, ListItemText } from '@material-ui/core'
import Cohortes from "./Cohortes/Cohortes"
import Modulos from "../Alumnos/modulo-alumno"
import Clase from "./Clase/Clase";
export default function Admin(){
    const match = useRouteMatch();
    return(
        <div className={styles.admin}>
            <List subheader={<ListSubheader>Administración</ListSubheader>} className={styles.menu}>
                <ListItem button component={Link} to={`${match.url}/Clases`}>
                    <ListItemText>Clases</ListItemText>
                </ListItem>
                <ListItem button component={Link} to={`${match.url}/Cohortes`}>
                    <ListItemText>Cohortes</ListItemText>
                </ListItem>
                <ListItem button component={Link} to={`${match.url}/Modulos`}>
                    <ListItemText>Modulos</ListItemText>
                </ListItem>
            </List>
            <Route exact path={`${match.path}/Clases`}>
                <Clase/>
            </Route>
            <Route exact path={`${match.path}/Cohortes`}>
                <Cohortes/>
            </Route>
            <Route exact path={`${match.path}/Modulos`}>
                <Modulos />
            </Route>
        </div>
    );
}