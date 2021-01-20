import React, {useState} from 'react';
import {InputBase, AppBar, Toolbar, Menu, MenuItem} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import {fade, makeStyles} from '@material-ui/core/styles';
import logo from '../assets/empyrean-logo.svg'
import Link from '@material-ui/core/Link'
import {UserIcon, SearchIcon} from '../icons/Icons'
import grey from "@material-ui/core/colors/grey";
import NestedMenu from "../components/NestedMenu";
import SideMenu from '../ui/Drawer'
import {TabsArr} from "../data/data";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    display:'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      marginRight: theme.spacing(1),
    },
  },
  logo: {
    height: 23,
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      height: 30,
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
    right: '0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '2'
  },
  inputRoot: {
    borderRadius: '50px',
    color: 'inherit',
    backgroundColor: grey[100]
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(.5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  flexGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  menuGroup: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  tabsBox: {
    height: '64px'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  offsetHeight: {
    height: '64px'
  }

}));

export default function SearchAppBar() {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" color='secondary'>
        <Toolbar className={classes.toolbar}>
          <div className='flexContainer'>
            <SideMenu/>

            <Link href='/'>
              <img className={classes.logo} src={logo} alt=""/>
            </Link>
          </div>
          <div className={classes.menuGroup}>
            {TabsArr.map((x,index) => (<NestedMenu key={index} sub={x.sub} link={x.link} title={x.title}/>))}
          </div>
          <div className={classes.flexGroup}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="搜尋…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
              />
            </div>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <UserIcon/>
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
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {/*<div className={classes.offsetHeight}/>*/}
    </>
  );
}
