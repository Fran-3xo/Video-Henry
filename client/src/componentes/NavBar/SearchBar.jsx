import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './navbar.module.css'
import {InputBase} from '@material-ui/core';
import {Search} from "@material-ui/icons"
export default function SearchBar(){
    const history = useHistory();
    const search = (e)=>{
        if(e.key === "Enter" && !!e.target.value.trim()){
            
            //history.replace("/search/"+e.target.value.trim())
            history.replace("/search/"+e.target.value.trim())

        }
    }
    return(
        <div className={styles.searchBar}>
            <div className={styles.search}>
                <div className={styles.searchIcon}>
                    <Search/>
                </div>
                <InputBase
                placeholder="Buscar…"
                classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={search}
                />
          </div>
        </div>
    );
}