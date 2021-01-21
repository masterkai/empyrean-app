import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import LatestNews from "./LatestNews";

const useStyles = makeStyles(theme => ({
  tab: {
    marginBottom: 20,
    marginTop: 90,
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
    },
  },
  media: {
    height: 406,
    [theme.breakpoints.down('md')]: {
      height: 406 / 2,
    },
  },
  tabsContainer: {
    marginBottom: 120
  }
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

      <div className={classes.tabsContainer}>
        <Tabs
          className={classes.tab}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="最新消息" {...a11yProps(0)}/>
          <Tab label="新聞稿" {...a11yProps(1)}/>
          <Tab label="公告" {...a11yProps(2)}/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <LatestNews/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LatestNews/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LatestNews/>
        </TabPanel>
      </div>
    </>
  )
}