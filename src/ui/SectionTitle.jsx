import React from 'react';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  box:{
    [theme.breakpoints.down('md')]: {
      marginTop:theme.spacing(4),
      marginBottom:theme.spacing(2)
    },

  },
  typography:{
    [theme.breakpoints.down('md')]: {
      fontSize:'1.375rem'
    },

  }
}))

function SectionTitle({title}) {
  const classes = useStyles()
  return (
    <>
      <Box mt={4} mb={4} className={classes.box}>
        <Typography className={classes.typography} variant="h4" component="h1" gutterBottom align='center'>
          {title}
        </Typography>
      </Box>
    </>
  );
}

export default SectionTitle;