import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardHeader, IconButton } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import {getVideo} from "../../store/actions/clases";
import { useParams, useHistory } from 'react-router-dom';
import useStyles from './Clases.styles'
import Axios from 'axios';
export default function ClaseDisplay(){
    const dispatch = useDispatch();
    const {video_id} = useParams();
    const classes = useStyles();
    const history = useHistory();
    const {clases: {video}} = useSelector(store => store);
    useEffect(()=>{
        if (!!video_id) dispatch(getVideo(video_id));
    },[video_id])
    return (
        <div className={classes.contenedor_video}>
            {!!video?(
                <Card className={classes.media}>
                    <CardHeader 
                        title={video.titulo} 
                        subheader={`${video.modulo || ""}  ${video.instructor || ""}  ${video.cohorte || ""}`}
                        action={
                            <IconButton onClick={() => history.goBack()}>
                                <ArrowBack/>
                            </IconButton>
                        }
                        classes={
                            {
                                root:classes.header
                            }
                        }
                    />
                    <CardMedia component="div" dangerouslySetInnerHTML={{__html:video.iframe}}/>
                </Card>
            ):(
                <Card className={classes.media}>
                    <CardHeader title={<Skeleton  height={50}/>} subheader={<Skeleton  height={20}/>}/>
                    <CardMedia component={Skeleton} height={480}/>
                </Card>
            )}
        </div>
    )
}