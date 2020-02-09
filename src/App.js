import React from "react";
import classes from "./App.module.css";
// import counter1 from './components/counter';
// import Login from './comNotINuse/LoginNew';
// import LongMenu from "./components/menu";
// import MaterialTableDemo from './comNotINuse/phonetbl';
// import MaterialTableDemo1 from "./components/phonelist1";
// import Container from "@material-ui/core/Container";
// import { TitleComponent } from './comNotINuse/titlecommponent';
// import Grid from "@material-ui/core/Grid";

// import LayoutTitleTextFields from './components/phonetitle';
// import NestedGrid from "./combkp/NestedGrid";
// import FixedContainer from './Container/box-fix';
// import MaterialTable from 'material-table';
// import MaterialTableDemo from './components/phonetbl';
// import getInitialStat from './combkp/phonebook_entry';
import LoginUser from "./components/LoginUser";
// import FixedContainer from "./Container/box-fix";
import LangForm from './components/selEngHeb';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import MaterialTableDemo1 from "./components/phonelist1";
import FixedContainer from "./Container/Search-Abc";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import HomeIcon  from './components/svgIcon';
import phoneOne from './components/PhoneRecived';

// import Header from './components/logo';
// import Header from './components/logoPhone';

// import test from './components/test';
// import NonIdiomaticList from './components/listArray';

function App() {
  const displayMessage = () => {
    console.log("Hello .....");
  };
  const Displaylink = () => {
    console.log("Hello link");
  };
  
  
  
  return (
    <div className={classes.App}>
        <Container maxWidth="lg" className={classes.container}>
       
        {/* <FixedContainer/> */}
      <Nav />
      <Grid container direction="column"  alignItems="center" />
        <Switch>
        <Route  path='/Home' exact  component={HomeIcon}/>
        <Route  path='/login' exact  component={LoginUser}/>
        <Route  path='/PhoneList' exact component={MaterialTableDemo1}/>
        <Route  path='/Phone' exact  component={phoneOne}/>
        <Route  path='/about' exact  component={About}/>
        </Switch>
        
        </Container>
    </div>
  );
}



export default App;
