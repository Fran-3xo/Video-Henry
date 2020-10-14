import React from "react";
import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
export default function Confirm(props){
    const AcceptButton = withStyles({
        root:{
            backgroundColor:props.severity==="danger"?"red":"#ff9800",
            color:"white",
            "&:hover":{
                backgroundColor:props.severity==="danger"?"#e00":"#ffe000"
            }
        }
    })(Button)
    return(
        <Dialog 
            open={props.open} 
            aria-labelledby="confirm-title" 
            aria-describedby="confirm-content"
        >
            <DialogTitle id="confirm-title">{props.title}</DialogTitle>
            <DialogContent id="confirm-content">{props.children}</DialogContent>
            <DialogActions>
                <Button onClick={props.decline}>Cancelar</Button>
                <AcceptButton variant="contained" onClick={props.accept}>Aceptar</AcceptButton>
            </DialogActions>
        </Dialog>
    )
}