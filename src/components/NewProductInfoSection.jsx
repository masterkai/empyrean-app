import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import React from "react";

import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SectionTitle from "../ui/SectionTitle";

const styles = {'maxWidth':'100%','height':'auto'}
const useStyles = makeStyles(theme => ({
  tab: {
    marginBottom: 20
  },
  paper: {
    // '&:hover':{
    //   boxShadow:'0 0 6px rgba(0,0,0,0.25)'
    // },
    boxShadow: '0 0 8px rgba(100,100,100,0.5)',
    display: 'flex',
    flexDirection:'column',
    justifyContent:"center",
    alignItems: 'center',
    width:'100%',
    height: '100%',
    borderRadius: 20,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[100],

  },
}))

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function NewProductInfoSection() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <SectionTitle title='新品資訊'/>
      <Tabs
        className={classes.tab}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Suunto" {...a11yProps(0)}/>
        <Tab label="Mio" {...a11yProps(1)}/>
        <Tab label="ORO" {...a11yProps(2)}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid
          container={true}
          spacing={3}
          direction="row"
          justify="space-between"
          alignItems='stretch'>
          <Grid item={true} md={6} xs={12}>
            <Paper className={classes.paper}>
              <img src='/images/suunto/suunto7.png' style={styles} alt='suunto7'/>
              <Typography variant='h5'>SUUNTO 7</Typography>
              <Typography variant='h5'>運動與生活完美合一</Typography>
              <Button
                variant="contained"
                color="primary"
                style={{'margin': '30px 0 0', 'borderRadius': '50px'}}>
                立即購買
              </Button>
            </Paper>
          </Grid>
          <Grid item={true} md={6}>
            <Grid container={true} spacing={3}>
              <Grid item={true} md={6} xs={12}>
                <Paper className={classes.paper}>
                  <img src='/images/suunto/SPARTAN.png' style={styles} alt='SPARTAN'/>
                  <Typography variant='h5'>SPARTAN</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{'margin': '15px 0 0', 'borderRadius': '50px'}}>
                    立即購買
                  </Button>
                </Paper>
              </Grid>
              <Grid item={true} md={6} xs={12}>
                <Paper className={classes.paper}>
                  <img src='/images/suunto/suunto3.png' style={styles} alt='suunto3'/>
                  <Typography variant='h5'>SUUNTO 3</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{'margin': '15px 0 0', 'borderRadius': '50px'}}>
                    立即購買
                  </Button>
                </Paper>
              </Grid>

              <Grid item={true} md={6} xs={12}>
                <Paper className={classes.paper}>
                  <img src='/images/suunto/suunto9baro.png' style={styles} alt='suunto9baro'/>
                  <Typography variant='h5'>suunto9baro</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{'margin': '15px 0 0', 'borderRadius': '50px'}}>
                    立即購買
                  </Button>
                </Paper>
              </Grid>
              <Grid item={true} md={6} xs={12}>
                <Paper className={classes.paper}>
                  <img src='/images/suunto/suunto5.png' style={styles} alt='suunto5'/>
                  <Typography variant='h5'>SUUNTO 5</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{'margin': '15px 0 0', 'borderRadius': '50px'}}>
                    立即購買
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  )
}