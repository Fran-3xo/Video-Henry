import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonBase, Typography, Grid, Container } from '@material-ui/core'
import useStyles from './Home.styles';

const images = [
    {
        url: 'https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png',
        title: 'M1',
    },
    {
        url: 'https://thedevcouple.com/wp-content/uploads/2017/10/Interview-React-2.jpg',
        title: 'M2',
    },
    {
        url: 'https://i.ytimg.com/vi/45dAt9Gz8rE/maxresdefault.jpg',
        title: 'M3',
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJECsXGkOPiCyLF5lhN0pRbhw_UnFcOkhyZQ&usqp=CAU',
        title: 'M4',
    },
    {
        url:"https://concepto.de/wp-content/uploads/2018/08/workshop-entrenamiento-e1533739153178.jpg",
        title: "Workshop"
    },
    {
        url:"https://elroldanense.com/wp-content/uploads/2019/08/charlas2.jpg",
        title: "Talks"
    },
    {
        url:"https://dev-res.thumbr.io/libraries/14/04/09/lib/1533172648445_1.jpg?size=854x493s&ext=jpg",
        title: "Otros"
    }

];

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <Container >
                <Typography variant="h3">Videos</Typography>
                <Grid className={classes.contenedor} container spacing={3}>
                    {images.map((image) =>(
                        <Grid item key={image} xs={8} sm={10} md={5}>
                            <Link style={{ textDecoration: 'none' }} to={`/categoria/${image.title}/`} modulo={image.modulo} >
                                <ButtonBase key={image.title} className={classes.image} focusVisibleClassName={classes.focusVisible}>
                                    <span
                                        className={classes.imageSrc}
                                        style={{
                                            backgroundImage: `url(${image.url})`,
                                        }}
                                    />
                                    <span className={classes.imageBackdrop} />
                                    <span className={classes.imageButton}>
                                        <Typography
                                            component="span"
                                            variant="h2"
                                            color="inherit"
                                            className={classes.imageTitle}
                                        >
                                            {image.title}
                                            <span className={classes.imageMarked} />
                                        </Typography>
                                    </span>
                                </ButtonBase>
                            </Link>
                        </Grid>

                    ))}
                </Grid>
            </Container >
        </div>
    );
}