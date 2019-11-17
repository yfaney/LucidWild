import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MainContainer from '../container/MainContainer';

const Application = () => (
  <div>
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography
          variant="h2"
          color="inherit"
          align="center"
        >
          Lucid Wild - Video Shower
        </Typography>
      </Toolbar>
    </AppBar>
    <MainContainer />
  </div>
);

export default Application;
