import React, { useState } from "react";
import { Box, Container, IconButton } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import LovePic from "../love.png";
import ReactPlayer from "react-player"
import Alert from '@material-ui/lab/Alert';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "100vh",
    },
    title: {
      fontSize: 64,
    },
    subtitle: {
      fontSize: 24,
    },
  })
);

export const HomePage = () => {
  const classes = useStyles();
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenVideo = () => {
    setVideoOpen(true);
  }

  return (
    <Box className={classes.main}>
      <Container className={classes.title}>
        <b>Hi ! </b>
      </Container>
      <Container className={classes.subtitle}>
        Welcome to <b>HandsOff</b>, <br/>a data solution created by i8OBA for the one and only HandsOn HK, with love.
      </Container>
      <img src={LovePic} style={{ height: 150, margin: 50 }}/>
      <Alert severity="info">To get started, please watch this video we've made just for you !</Alert><br />
      {videoOpen ? <ReactPlayer
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      /> : 
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleOpenVideo}
      >
        <PlayArrowIcon />
      </IconButton>}
    </Box>
  )
}