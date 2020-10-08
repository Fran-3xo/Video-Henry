import React,{useEffect} from "react"
import styles from "./registrarse.module.css"
import {useSelector, useDispatch} from "react-redux";
import {getAlumnos} from "../../store/actions/alumnos"

export const TablaAlumnos = () => {
const {alumnos: {alumnos}} = useSelector(store  => store);
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getAlumnos());
},[])
return (
    <div className={styles.alumnos}>
        <h1>Alumnos </h1>
            {alumnos.map(alumno => (<div>{alumno.username}</div>))}
    </div>
)

}