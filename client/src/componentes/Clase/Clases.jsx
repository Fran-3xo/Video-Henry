import React, { useEffect } from 'react';
import { Button, GridList, GridListTile, GridListTileBar, useMediaQuery, CircularProgress, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import {getClasesByModulo, searchVideos, cleanVideos} from "../../store/actions/clases"
import { Link, useParams } from 'react-router-dom';
import useStyles from './Clases.styles'


export default function Modulo(props) {
    const classes = useStyles();
    const max1024 =useMediaQuery("(max-width:1024px)")
    const max600 =useMediaQuery("(max-width:600px)")
    const { modulo, query } = useParams();
    const dispatch = useDispatch();
    const {clases: {clases, pags, ActionType, limit_show, currents, fetching_videos}} = useSelector(store => store);
    useEffect(() =>{
        return () => dispatch(cleanVideos());
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
        if(!!modulo)dispatch(getClasesByModulo(modulo)); 
        if(!!query) dispatch(searchVideos(query)); 
        // eslint-disable-next-line
    },[query, modulo]);
    const seeMore = () => {
        if (ActionType === "GET_MODULO" && !!modulo)
            dispatch(getClasesByModulo(modulo, pags + 1, limit_show))
        else if(!!query) dispatch(searchVideos(query, pags + 1, limit_show))
    
    }

    if(clases === null) return(
        <div className={classes.contenedor}>
            <CircularProgress classes={{root:classes.loading}}/>
        </div>
    );
    if(!clases.length) return(
        <div className={classes.contenedor}>
            <Typography variant="h3">No hay nada Aqui :v</Typography>
        </div>
    );
    return (
        <div className={classes.contenedor}>
            <GridList cols={max1024?max600?1:2:4} cellHeight={240} classes={{root:classes.grid}}>
                {clases.map(clase =>(
                    <GridListTile component={Link} cols={1} to={`/video/${clase.video_id}`}>
                        <img src={clase.prev_image} alt=""/>
                        <GridListTileBar title={clase.titulo} subtitle={`${clase.modulo || ""}  ${clase.instructor || ""}  ${clase.cohorte || ""}`}/>
                    </GridListTile>
                ))}
            </GridList>
            {fetching_videos && <CircularProgress classes={{root:classes.loading}}/>}
            {(clases.length < currents) && (<Button onClick={() => seeMore()}>Ver mas</Button>)}
        </div>
    )
}  
