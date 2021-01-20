import React from "react";
import {Menu, MenuItem, Button} from "@material-ui/core";
import NestedMenuItem from "material-ui-nested-menu-item";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


const StyledMenu = withStyles({
  paper: {
    padding: 'none'

  },
})((props) => (
  <Menu
    elevation={2}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  mainNav: {
    padding: '10px 15px',
    color: theme.palette.grey[600],
    fontWeight: 400,
    letterSpacing: 2,
  },
  menuItem: {
    color: theme.palette.grey[600],
    maxWidth: '100%',
    width: '100%',
    padding: '20px 60px',
    fontSize: '.96rem',
    letterSpacing: 2,
    display: 'flex',
    justifyContent: 'space-between'
  },
  itemLink: {
    color: theme.palette.grey[600],
  }
}));
export default function NestedMenu({title, link, sub}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles()

  const handleClick = (event) => {

    if (anchorEl) {
      return;
    }
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    // if (menuPosition) {
    //   return;
    // }
    // event.preventDefault();
    // setMenuPosition({
    //   top: menuRef.current.getBoundingClientRect().bottom,
    //   left: menuRef.current.getBoundingClientRect().left
    // });
  };

  const handleItemClick = (event) => {
    // setMenuPosition(null);
    setAnchorEl(null);
    // console.log(menuRef.current.getBoundingClientRect().bottom);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  if (link) {
    return (
      <Button
        color='inherit'
        target="_blank"
        className={classes.mainNav}
        href={link}
      >
        {title}
      </Button>
    )
  }

  const renderMenu = arr => {
    return arr.map((x,i) => x.sub && x.sub.length > 0 ? (
      <NestedMenuItem
        className={classes.menuItem}
        key={i}
        label={x.title}
        parentMenuOpen={Boolean(anchorEl)}
        onClick={handleItemClick}
        divider
      >
        {renderMenu(x.sub)}

      </NestedMenuItem>
    ) : (
      <MenuItem
        key={i}
        className={classes.menuItem}
        onClick={handleItemClick}
        divider
        children={Link}
        component={Link}
        href='/about'
      >
        {x.title}
      </MenuItem>
    ))
  }

  return (
    <>
      <Button
        className={classes.mainNav}
        onClick={handleClick}
      >
        {title}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {sub && renderMenu(sub)}
      </StyledMenu>
      {/*<Menu*/}
      {/*  className={classes.menu}*/}
      {/*  open={!!menuPosition}*/}
      {/*  onClose={() => setMenuPosition(null)}*/}
      {/*  anchorReference="anchorPosition"*/}
      {/*  anchorPosition={menuPosition}*/}
      {/*>*/}
      {/*  {sub&&renderMenu(sub)}*/}
      {/*</Menu>*/}
    </>
  );
}