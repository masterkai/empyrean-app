import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        {props.siteName}
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}{` All Rights Reserved. 隱私聲明 免責條款`}
    </Typography>
  );
}
