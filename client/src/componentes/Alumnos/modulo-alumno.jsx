import React from "react";
import { Button } from '@material-ui/core';
import styles from "./modulo.module.css"
import { Link, useRouteMatch, Route } from 'react-router-dom';

export default function AlumnosModulos () {
    const match = useRouteMatch();
    return (
        <div className={styles.buttons}>
            
            <h1 className={styles.titulo}>Modulos</h1>
            <Button className={styles.botones} color="primary" variant="contained" component= {Link} to= {`${match.url}/1`} >
                Modulo 1
            </Button>
            <Button className={styles.botones} color="primary" variant="contained" component= {Link} to= {`${match.url}/2`}>
                Modulo 2
            </Button>
            <Button className={styles.botones} color="primary" variant="contained" component= {Link} to= {`${match.url}/3`}>
                Modulo 3
            </Button>
            <Button className={styles.botones} color="primary" variant="contained" component= {Link} to= {`${match.url}/4`}>
                Modulo 4
            </Button>
            
            <Route exact path={`${match.path}/:id`}>
                
            </Route>
        </div>
        );
}