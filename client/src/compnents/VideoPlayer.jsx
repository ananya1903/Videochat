import React, { useContext } from 'react';

import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';


import { SocketContext } from '../Context.js';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '0px',
    color:'darkblue',
  },
  
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
            <Typography variant="h6">{name || 'Name'}</Typography>
            
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
            <Typography variant="h6">{call.name || 'Name'}</Typography>
            
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};
    

export default VideoPlayer;
