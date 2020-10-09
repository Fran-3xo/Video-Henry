import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardHeader } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useStyles from './Clases.styles'
export default function ClaseDisplay(){
    const {video_id} = useParams();
    const classes = useStyles();
    const [video, setVideo] = useState();
    const {clases: {clases}} = useSelector(store => store);
    useEffect(()=>{
        const [clase] = clases.filter(clase => clase.video_id === parseInt(video_id));
        if (!!clase) setVideo(clase);
    },[video_id])
    return (
        <div className={classes.contenedor_video}>
            {!!video?(
                <Card className={classes.media}>
                    <CardMedia component="div" dangerouslySetInnerHTML={{__html:video.iframe}}/>
                    <CardHeader title={video.titulo} subheader={`${video.modulo || ""} - ${video.instructor || ""} - ${video.cohorte || ""}`}/>
                </Card>
            ):(
                <Card className={classes.media}>
                    <CardMedia component={Skeleton} height={480}/>
                    <CardHeader title={<Skeleton  height={50}/>} subheader={<Skeleton  height={20}/>}/>
                </Card>
            )}
        </div>
    )
}