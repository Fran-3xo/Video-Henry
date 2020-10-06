import React, { useState } from 'react';
import styles from "./admin.module.css";
import { Link, useRouteMatch, Route } from 'react-router-dom';
export default function Admin(){
    const match = useRouteMatch();
    return(
        <div className={styles.admin}>
            <div className={styles.menu}>
                <Link className={styles.links} to={`${match.url}/Clases`}>Clases</Link>
                <Link className={styles.links} to={`${match.url}/Cohortes`}>Cohortes</Link>
                <Link className={styles.links} to={`${match.url}/Modulos`}>Modulos</Link>
            </div>
            <Route exact path={`${match.path}/Clases`}>
                <h1>Clases</h1>
            </Route>
            <Route exact path={`${match.path}/Cohortes`}>
                <h1>Cohortes</h1>
            </Route>
            <Route exact path={`${match.path}/Modulos`}>
                <h1>Modulos</h1>
            </Route>
        </div>
    );
}