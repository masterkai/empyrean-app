import React, {useState} from 'react';
import clsx from 'clsx';
import logo from '../assets/empyrean-logo.svg'
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CancelIcon from '@material-ui/icons/Cancel';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import {TabsArr} from "../data/data";
import {hasChildren} from "../utils/utils";

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      marginRight: theme.spacing(1),
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listSubheader: {
    backgroundColor: '#fff'
  },
  logo: {
    height: 20
  }
}));




export default function EmpyreanDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const MenuItem = ({item}) => {
    const Component = hasChildren(item) ? MultiLevel : SingleLevel;
    return <Component item={item}/>;
  };
// SingleLevel Component
  const SingleLevel = ({item}) => {
    return (
      <ListItem button onClick={toggleDrawer('left', false)}>
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.title}/>
      </ListItem>
    );
  };
// MultiLevel Component
  const MultiLevel = ({item}) => {
    const {sub: children} = item;
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };

    return (
      <React.Fragment>
        <ListItem button onClick={handleClick}>
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText primary={item.title}/>
          {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
        </ListItem>
        {/*<Divider/>*/}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, key) => (
              <MenuItem key={key} item={child}/>
            ))}
          </List>
        </Collapse>
        <Divider/>
      </React.Fragment>
    );
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader className={classes.listSubheader} component="div" id="nested-list-subheader">
            <div className='close'>
              <img className={classes.logo} src={logo} alt=""/>
              <CancelIcon onClick={toggleDrawer('left', false)}/>
            </div>
          </ListSubheader>
        }
        className={classes.root}
      >

        <Divider/>

        {TabsArr && TabsArr.length > 0 && TabsArr.map((item, key) => <MenuItem key={key} item={item}/>)}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon/>
      </IconButton>
      {/*<Button onClick={toggleDrawer('left', true)}>{'left'}</Button>*/}

      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </>
  );
}
