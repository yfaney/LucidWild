import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import Application from './js/components/application/Application.jsx';

const wrapper = document.getElementById('create-article-form');
wrapper ? ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Application />
  </ThemeProvider>,
  wrapper) : false;
