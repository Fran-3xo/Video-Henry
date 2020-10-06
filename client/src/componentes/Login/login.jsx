import React from "react";
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styles from "./login.module.css";
export default function Login(){
    return(
        <div className={styles.login}>
            <Button href="http://localhost:3006/user/github/login">Iniciar sesión</Button>
        </div>
    );
}