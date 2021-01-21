
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SectionTitle from "../ui/SectionTitle";

const images = [
  {
    url: '/images/knowledge01.jpg',
    title: 'Breakfast01',
    width: '100%',
  },
  {
    url: '/images/knowledge02.jpg',
    title: 'Breakfast',
    width: '100%',
  },
  {
    url: '/images/knowledge03.jpg',
    title: 'Burgers',
    width: '100%',
  },
  {
    url: '/images/knowledge04.jpg',
    title: 'Camera',
    width: '100%',
  },
];

const images2 = [
  {
    url: '/images/app01.jpg',
    title: 'Breakfast01',
    width: '100%',
  },
  {
    url: '/images/app02.jpg',
    title: 'Breakfast',
    width: '100%',
  },
  {
    url: '/images/app03.jpg',
    title: 'Burgers',
    width: '100%',
  },
  {
    url: '/images/app04.jpg',
    title: 'Camera',
    width: '100%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    borderRadius: 20,
    position: 'relative',
    height: 570,
    [theme.breakpoints.down('md')]: {
      width: '100% !important', // Overrides inline-style
      height: 300,
    },
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  image2: {
    borderRadius: 20,
    boxShadow: '0 0 6px rgba(0,0,0,0.5)',
    // border: 'solid 1px red',
    position: 'relative',
    height: 115,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  imageBackdrop: {
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    [theme.breakpoints.down('xs')]: {
      padding: `${theme.spacing(1)}px`,
    },
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function KnowledgeAndApplicationSection() {
  const classes = useStyles();
  return (
    <>
      <SectionTitle title='知識與應用'/>
      <Grid container spacing={3}>
        {images.map((image) => (
          <Grid key={image.title} item xs={3}>
            <ButtonBase
              focusRipple
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
              <span className={classes.imageBackdrop}/>
              <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked}/>
            </Typography>
          </span>
            </ButtonBase>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {images2.map((image) => (
          <Grid key={image.title} item xs={3}>
            <ButtonBase
              focusRipple
              className={classes.image2}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: image.width,
              }}
            >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />


            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </>
  )
}