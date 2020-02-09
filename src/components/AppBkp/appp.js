import React from "react";
import classes from "./App.module.css";
// import counter1 from './components/counter';
// import Login from './comNotINuse/LoginNew';
import LongMenu from "./components/menu";
// import MaterialTableDemo from './comNotINuse/phonetbl';
import MaterialTableDemo1 from "./components/phonelist1";
import Container from "@material-ui/core/Container";
// import { TitleComponent } from './comNotINuse/titlecommponent';
import Grid from "@material-ui/core/Grid";

// import LayoutTitleTextFields from './components/phonetitle';
// import NestedGrid from "./combkp/NestedGrid";
// import FixedContainer from './Container/box-fix';
// import MaterialTable from 'material-table';
// import MaterialTableDemo from './components/phonetbl';
// import getInitialStat from './combkp/phonebook_entry';
import LoginUser from "./components/LoginUser";
import FixedContainer from "./container/Searc-Abc";
import LangForm from './components/selEngHeb';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from './components/Nav';
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
      {/* <h1>ספר טלפונים  ארגוני </h1> */}
      {/* <Switch> */}
        {/* <Route exact path="./components/menu:login" component={LongMenu} /> */}
        {/* <Route exact path="./components/LoginUser" component={LoginUser} /> */}
    {/* </Switch> */}
    <Nav>
        <Switch>
        <Route  path="/" exact component={LoginUser} />
        <Route  path="/components/LoginUser"  component={LoginUser} />
        <Route  path="/Container/box-fix"  component={LoginUser} />
        </Switch>
    </Nav>
    {/* <nav>
    <Link to="./components/LoginUser">Login</Link>
    </nav> */}
    
      <LongMenu  className={classes.menu} />
        <Container maxWidth="lg" className={classes.container}>
      <h1 className={classes.h1}>ספר טלפונים ארגוני </h1>
        <Grid container direction="column"  alignItems="center">
          {/* <TitleComponent title="Phone Book!" /> */}
          {/* <Login message="Login" showMessage={displayMessage} ShowLink={Displaylink}/> */}
          <Grid item lg>
              
            {/* <LoginUser></LoginUser> */}
          </Grid>
          <Grid  item lg container direction="row" alignItems="flex">
              <LangForm/>
                {/* <select>
                        <option value="en">Eng</option>
                        <option value="עבר">עברית</option>
               
                </select> */}
            </Grid>
          <Grid item lg style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
          
            <FixedContainer></FixedContainer> 
            
            </Grid>
            <Grid item lg>
          <MaterialTableDemo1></MaterialTableDemo1> 
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}



export default App;
