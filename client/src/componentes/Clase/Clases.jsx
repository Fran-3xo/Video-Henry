import React, { useEffect } from 'react';
import { Button, GridList, GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import {getClasesByModulo, searchVideos} from "../../store/actions/clases"
import { Link, useParams, useLocation } from 'react-router-dom';
import useStyles from './Clases.styles'


export default function Modulo(props) {
    const classes = useStyles();
    const max1024 =useMediaQuery("(max-width:1024px)")
    const max600 =useMediaQuery("(max-width:600px)")
    const { modulo, query } = useParams();
    const dispatch = useDispatch();
    const {clases: {clases, currents}} = useSelector(store => store);
    useEffect(()=>{
        if(!!modulo)dispatch(getClasesByModulo(modulo));
        if(!!query) dispatch(searchVideos(query))
        
    },[query, modulo]);
    return (
        <div className={classes.contenedor}>
            <GridList cols={max1024?max600?1:2:4} cellHeight={240}>
                {clases.map(clase =>(
                    <GridListTile component={Link} cols={
                        (()=>{
                            if(!max1024 && !max600){
                                if(clases.length <= 4) return Math.round(4/(2 * clases.length))
                                return 1
                            }
                            if(max1024 && !max600){
                                if(clases.length === 1) return 2;
                                return 1;
                            }
                            return 1;

                        })()
                    } to={`/video/${clase.video_id}`}>
                        <img src={clase.prev_image}/>
                        <GridListTileBar title={clase.titulo} subtitle={`${clase.modulo || ""} - ${clase.instructor || ""} - ${clase.cohorte || ""}`}/>
                    </GridListTile>
                ))}
            </GridList>
            {currents > 48 && (<Button onClick={() => dispatch(getClasesByModulo(modulo, (currents * 2)))}>Ver mas</Button>)}
        </div>
    );
}  
