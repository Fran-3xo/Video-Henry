import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    grid:{
        width:"100%"
    },
    contenedor: {
        margin:"5rem 2rem",
        display: 'flex',
        flexDirection: "column"
    },
    loading:{
        margin:"auto"
    },
    contenedor_video:{
        display: "flex",
        margin:"5rem 2rem",
        justifyContent: "center"
    },
    boton: {
        width: "400px",
        margin: '10px',
    },
    media: {
        minWidth: 850,
        maxWidth: "none",
    },
    header:{
        flexDirection: "row-reverse"
    },
    
botonRegresar: {
    backgroundColor: "#1e2831",
    color: "white",
    display: "flex",
}

}));