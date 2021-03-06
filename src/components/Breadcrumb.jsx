import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(8),
    },
    marginTop: theme.spacing(2),
  },
}));

function handleClick(event) {
  // event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link to="/" onClick={handleClick}>
          首頁
        </Link>

        <Typography color="textPrimary">最新消息</Typography>
      </Breadcrumbs>
    </div>
  );
}
