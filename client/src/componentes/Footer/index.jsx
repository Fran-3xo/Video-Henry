import React from 'react';
import styles from "./footer.module.css"
import {Typography, Avatar, Link} from '@material-ui/core'
import logo from "../../images/check.png"
import {Link as RouterLink} from 'react-router-dom';
export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.company}>
                <Avatar src={logo} component="a" href="https://soyhenry.com"/>
                <Typography variant="caption" classes={{root:styles.copy}}>
                    &copy;{new Date().getFullYear()} Henry
                </Typography>
            </div>
            <div className={styles.app}>
                <Typography variant="subtitle1">Henry App Video Grupo 05</Typography>
                <Link variant="subtitle2" className={styles.about} component={RouterLink} to="/About">About Us</Link>
            </div>
        </div>
    )
}