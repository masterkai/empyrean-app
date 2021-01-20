import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Copyright from "./Copyright";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
const data = [
  {title: '品牌代理', li: [{name: 'SUUNTO'}, {name: 'MIO'}, {name: 'ORO'}]},
  {title: '最新訊息', li: [{name: '最新消息'}, {name: '活動報名'}]},
  {title: '公司介紹', li: [{name: '關於我們'}, {name: '徵才資訊'}]},
  {title: '何處購買', li: [{name: '購物中心'}, {name: '一般通路'}, {name: '網際通路'}]},
  {title: '支援服務', li: [{name: '會員中心'}, {name: '產品註冊'}, {name: '常見問題'}, {name: '支援服務'}, {name: '維修申請'},]},
  {title: '其他服務', li: [{name: '5HM1購物中心'}, {name: '愛克賽事'},]},
]


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  list: {
    padding: 0,
    margin: '0 0 20px 0',
  },
  listItem: {
    padding: 0,
  },
  listItemLink: {
    padding: '10px 0 0',
  },
  listTitle: {
    padding: '0 0 10px 0',
  },
  gridItem: {
    flex: '0 1 calc(16.666667% - 80px)',
    [theme.breakpoints.down('md')]: {
      flex: '0 1 calc(16.666667% - 10px)',
    },
    [theme.breakpoints.down('xs')]: {
      flex: '0 1 calc(100% / 3)',
      textAlign: 'center'
    },
  }
}));

const siteName = '鴻翔國際電通'
export default function Footer() {
  const classes = useStyles();

  function renderColumn(arr) {
    return arr.map(({title, li},index) => (
      <Grid lg={2} xs={4} key={index} item className={classes.gridItem}>
        <List className={classes.list} component="ul" aria-label="contacts">
          <ListItem className={classes.listTitle}>
            <div className="linkTitle">{title}</div>
          </ListItem>
          <Divider/>
          {li.map(({name}) => (
            <ListItem key={name} className={classes.listItemLink}>
              <div className="listLink">{name}</div>
            </ListItem>
          ))}
        </List>
      </Grid>
    ))
  }

  return (
    <>
      <div className="footer">
        <Grid container>

          <Grid item xs={12} md={3}>
            <List className={classes.list} component="ul" aria-label="contacts">
              <ListItem className={classes.listItem}>
                <ListItemText className={classes.listItemText} secondary="客服諮詢：(02)8219-1889 分機212"/>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText className={classes.listItemText} secondary="週一至週五上午"/>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText className={classes.listItemText} secondary="10:00~12:00 下午 13:00~17:00"/>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText className={classes.listItemText} secondary="客服信箱 : service@empyrean.tw"/>
              </ListItem>
              <ListItem className={classes.listItem}>
                <ListItemText className={classes.listItemText} secondary="地址：新北市新店區民權路95號6樓"/>
              </ListItem>
            </List>

          </Grid>
          <Grid item md={9} xs={12}>
            <Grid container justify='space-between'>
              {data && renderColumn(data)}
            </Grid>
          </Grid>


        </Grid>
        <Divider/>
        <div className='noticeUs'>
          關注我們
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
          <PinterestIcon/>
        </div>

        <Copyright siteName={siteName}/>
      </div>

    </>
  )
}