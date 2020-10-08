import React, { useState, useEffect } from 'react';
import { Button, GridList, GridListTile, GridListTileBar, useMediaQuery } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import {getClasesByModulo} from "../../store/actions/clases"
import { Link, useParams } from 'react-router-dom';
import useStyles from './Clases.styles'
import axios from "axios";
export default function Modulo(props) {
    const classes = useStyles();
    const max1024 =useMediaQuery("(max-width:1024px)")
    const max600 =useMediaQuery("(max-width:600px)")
    const { modulo } = useParams();
    const dispatch = useDispatch();
    const {clases: {clases, currents}} = useSelector(store => store);
    const [display, setDisplay] = useState(currents)
    useEffect(()=>{
        dispatch(getClasesByModulo(modulo));
    },[modulo]);
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
                        <GridListTileBar title={clase.titulo} subtitle={clase.modulo}/>
                    </GridListTile>
                ))}
            </GridList>
            {display > 48 && (<Button onClick={() => dispatch(getClasesByModulo(modulo, (display * 2)))}>Ver mas</Button>)}
        </div>
    );
}  
