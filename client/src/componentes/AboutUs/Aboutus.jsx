import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import s from "./aboutUs.module.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles({
  root: {
    backgroundColor:"#000000c7",
    color: "#ffffff",
    margin: "1rem",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  aboutDes:{
    margin:"3rem"
  },
  devsTitle:{
    margin:"1rem"
  },
  title: {
    fontSize: 14,
    color: "#ffffff"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AboutUs() {
const classes = useStyles();
    return (
        <div className={s.container}>
          <Typography variant="h3">Henry App videos</Typography>
          <Typography variant="h5" className={classes.aboutDes}>
            Aplicación desarrollada a a partir del proyecto Henry App del Grupo de Alumnos 05 del cohorte WEB_FT03
            <br/>(Edinson Rosario, Francis Ricle, Franco Troncoso, Lautaro Mondati, Nahuel Russo, Nicolas Caillet, Emiliano Chequer(PM))
          </Typography>
          <Divider/>
          <Typography variant="h4" className={classes.devsTitle}>Desarrolladores</Typography>
          <div className={s.devs}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Henry - HenryApp (Grupo05)
                </Typography>
                <Typography variant="h5" component="h2">
                    Franco Troncoso
                </Typography>
                <Typography variant="body2" component="p">
                    Full Stack Developer
                </Typography>
                </CardContent>
                <CardActions className={s.botones}>
                <IconButton size="medium" variant="contained" className={s.linkedin} href= "https://www.linkedin.com/in/franco-troncoso-1a52811b4/"><LinkedInIcon/></IconButton>
                <IconButton variant="outlined" href="https://github.com/Fran-3xo" size= "medium" className={s.git}><GitHubIcon/></IconButton>
                </CardActions>
            </Card>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Henry - HenryApp (Grupo05)
                  </Typography>
                  <Typography variant="h5" component="h2">
                  Francis Ricle
                  </Typography>
                  <Typography variant="body2" component="p">
                  Full Stack Developer
                  </Typography>
              </CardContent>
              <CardActions className={s.botones}>
              <IconButton size="medium" variant="contained" className={s.linkedin} href="https://www.linkedin.com/in/francis-ricle-9191b6175/"><LinkedInIcon/></IconButton>
              <IconButton variant="outlined" className={s.git} href="https://github.com/FrancisRicle"  size= "medium"><GitHubIcon/></IconButton>
              </CardActions>
            </Card>
          </div>
        </div>
    );
}