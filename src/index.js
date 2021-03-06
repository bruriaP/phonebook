import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './shared/theme';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'


// ReactDOM.render(<App />, document.getElementById('root'));
const app = (
<ThemeProvider theme={theme}>
     <BrowserRouter>
     <App />
    </BrowserRouter>
   </ThemeProvider>
);
    

    
    ReactDOM.render(app,document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
