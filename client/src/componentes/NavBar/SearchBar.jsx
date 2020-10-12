import React from 'react';
import {InputBase} from '@material-ui/core';
import {Search} from "@material-ui/icons"
export default function SearchBar({placeholder, onKeyPress, onChange, searchBarClass, searchClass, iconClass, classes}){
    return(
        <div className={searchBarClass}>
            <div className={searchClass}>
                <div className={iconClass}>
                    <Search/>
                </div>
                <InputBase
                placeholder={placeholder}
                classes={classes}
                inputProps={{ 'aria-label': 'search' }}
                onKeyPress={onKeyPress}
                onChange={onChange}
                />
          </div>
        </div>
    );
}