import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import s from "./aboutUs.module.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:"#000000c7",
    color: "#ffffff",
    margin: "1rem",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={s.login}>
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
    <div>
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