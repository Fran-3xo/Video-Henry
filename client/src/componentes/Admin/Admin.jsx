import React, { useState } from 'react';
import styles from "./admin.module.css";
import { Link } from 'react-router-dom';
export default function Admin(){
    return(
        <div className={styles.admin}>
            <Link className={styles.links} to="/Clases">Clases</Link>
            <Link className={styles.links} to="/Cohortes">Cohortes</Link>
            <Link className={styles.links} to="/Modulos">Modulos</Link>
        </div>
    );
}