import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import '../App.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
  },
}));

export default function SearchAppBar({ setProducts }) {
  const classes = useStyles();
  const [q, setQuery] = useState("");

  async function fetchProducts() {
    const response = await fetch(`http://localhost:8080/api/search?q=` + q);

    const data = await response.json();

    setProducts(data);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#FFF159" }}>
        <Toolbar>
          <Button onClick={e => window.location.reload(false)}>
            <img width={140} height={80} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVEwYuj_yJ8Zs7PmXVE7udPVAich1KFsNCgg&usqp=CAU" />
          </Button>
          <Typography className={classes.title} variant="h6" noWrap >
            <Button onClick={e => window.location.reload(false)}>
              <div className="titulo">
                MERCADO LIBRE
              </div>
            </Button>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon style={{ color: "grey" }} />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                name="query"
                onChange={(e) => setQuery(e.target.value)}
                fullWidth={true}
              />
            </div>
          </Typography>
          <div>
            <br></br>
            <Button type="submit" onClick={fetchProducts}>
              <Typography style={{ color: "grey" }}>
                Buscar
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
