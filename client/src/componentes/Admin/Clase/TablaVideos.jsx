import React,{useEffect, useState} from "react"
import styles from "./registrarse.module.css"
import {useSelector, useDispatch} from "react-redux";
import {getVideos, searchVideosAdmin, dropVideos} from "../../../store/actions/clases";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, IconButton, Checkbox } from "@material-ui/core";
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ForwardIcon from '@material-ui/icons/ArrowForwardIos'
import Delete from '@material-ui/icons/Delete'
import SearchBar from '../../NavBar/SearchBar';
import { Link } from 'react-router-dom';
export default function TablaVideos(){
const [query, setQuery] = useState("");
const [selection, setSelection] = useState({
    map: {},
    selected: []
});
const {clases: {videos, pag, pags, limit, ActionType}} = useSelector(store  => store);
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getVideos()); // eslint-disable-next-line
},[])
useEffect(()=>{
    if(query)dispatch(searchVideosAdmin(query)); // eslint-disable-next-line
    else dispatch(getVideos()); // eslint-disable-next-line
},[query])
const handleSelection = (e) => {
    if(e.target.checked) selection.map[e.target.value] = "";
    else delete selection.map[e.target.value];
    setSelection({...selection, selected:Object.keys(selection.map)})
}
const renderVideos = (videos) =>{
    if(!videos && !Array.isArray(videos)) return (
        <TableRow>
            <TableCell colSpan="3" style={{textAlign:"center"}}><CircularProgress /></TableCell>
        </TableRow>
    );
    if(!videos.length) return (
        <TableRow>
            <TableCell colSpan="3" style={{textAlign:"center"}}>Sin resultados</TableCell>
        </TableRow>
    )
    return videos.map(video => (
        <TableRow>
            <TableCell>
                <Link to={`/video/${video.video_id}`}>{video.video_id}</Link>
            </TableCell>
            <TableCell>
                {video.titulo}
            </TableCell>
            <TableCell>
                <Checkbox
                    onChange={handleSelection}
                    value={video.video_id}
                />
            </TableCell>
        </TableRow>
    ))
}
const prevPag = () => {
    if(ActionType === "GET_VIDEOS") dispatch(getVideos(pag - 1))
    else dispatch(searchVideosAdmin(query, pag - 1))
}
const nextPag = () => {
    console.log(ActionType)
    if(ActionType === "GET_VIDEOS") dispatch(getVideos(pag + 1))
    else dispatch(searchVideosAdmin(query, pag + 1))
}
return (
        <div className={styles.videos}>
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableCell colSpan="3">
                    <SearchBar 
                        placeholder="Buscar videos..." 
                        onChange={e => setQuery(e.target.value.trim())}
                        searchClass={styles.search}
                        searchBarClass={styles.searchBar}
                        iconClass={styles.searchIcon}
                        classes={{
                            root: styles.inputRoot,
                            input: styles.inputInput,
                        }}
                    />
                </TableCell>
            </TableHead>
            {!!videos && !!videos.length &&
            <TableHead>
                <TableCell variant="head">
                    ID
                </TableCell>
                <TableCell variant="head">
                    Titulo
                </TableCell>
                <TableCell>
                    <IconButton aria-label="delete" onClick={() => dispatch(dropVideos({videos:selection.selected}))}>
                        <Delete/>
                    </IconButton>
                </TableCell>
            </TableHead>}
            <TableBody>
                {renderVideos(videos)}
                {pags > 10 && 
                <TableRow>
                    {pag > 1 && 
                    <TableCell>
                        <IconButton onClick={prevPag}><BackIcon/></IconButton>
                    </TableCell>}
                    <TableCell style={{textAlign:"center"}}>{`${pag} de ${Math.ceil(pags/ limit)}`}</TableCell>
                    {pag < Math.ceil(pags/ limit) && 
                    <TableCell>
                        <IconButton onClick={nextPag}><ForwardIcon/></IconButton>
                    </TableCell>}
                </TableRow>}
            </TableBody>
        </Table>
    </TableContainer>
        </div>
    )
}