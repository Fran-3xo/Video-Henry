import React from "react";
import { Button } from '@material-ui/core';
import styles from "./modulo.module.css"

export default function AlumnosModulos () {
    return (
        <div className={styles.buttons}>
            <h1 className={styles.titulo}>Modulos</h1>
            <Button className={styles.botones} color="primary" variant="contained">
                Modulo 1
            </Button>
            <Button className={styles.botones} color="primary" variant="contained">
                Modulo 2
            </Button>
            <Button className={styles.botones} color="primary" variant="contained">
                Modulo 3
            </Button>
            <Button className={styles.botones} color="primary" variant="contained">
                Modulo 4
            </Button>
        </div>
        );
}