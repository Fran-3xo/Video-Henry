import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import s from './navbar.module.css'
import imagen from "../../images/Henry logo.png"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styles from './navbar.module.css'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';  
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {AccountCircle, ExitToApp, SupervisorAccount} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../../store/actions/login';
import SearchBar from './SearchBar';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
}));

 export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const search = (e)=>{
    if(e.key === "Enter" && !!e.target.value.trim()){
        history.replace("/search/"+e.target.value.trim())
    }
  }
  const {user: {user}} = useSelector(state => state);
  const open = Boolean(anchorEl);
  const handleLog = () => {
    setAnchorEl(null);
    dispatch(logOut());
  };
  const goAdmin = () => {
    setAnchorEl(null);
    history.push("/Admin");
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={s.color}>
          <Typography variant="h6" className={classes.title + " " + s.letras + " " + s.espacio}>
            <Link to="/Home"> <img src={imagen} alt="" className={s.imagen}/> </Link> 
          </Typography>
          {!!user && (
          
            <div  className={s.user}>
            <SearchBar 
              placeholder="Buscar Video..." 
              onKeyPress={search}
              searchClass={styles.search}
              searchBarClass={styles.searchBar}
              iconClass={styles.searchIcon}
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
            />
              <IconButton
                aria-label="account  of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() =>{
                  handleLog();
                }}>
                  <ExitToApp/> Logout
                </MenuItem>
                {(user.rol==="director" || user.rol==="instructor") && 
                  <MenuItem onClick={() => goAdmin()}>
                    <SupervisorAccount/>
                    Administración
                  </MenuItem>
                }
              </Menu>
            </div>

          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
 