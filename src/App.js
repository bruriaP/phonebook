import React from 'react';
import classes from './App.module.css';
// import counter1 from './components/counter';
import Login from './components/LoginNew';
import LongMenu from './components/menu';
import MaterialTableDemo from './components/phonetbl';
import MaterialTableDemo1 from './components/phonelist1';
import Container from '@material-ui/core/Container';
import { TitleComponent } from './components/titlecommponent';

// import LayoutTitleTextFields from './components/phonetitle';
// import NestedGrid from "./combkp/NestedGrid";
// import FixedContainer from './Container/box-fix';
// import MaterialTable from 'material-table';
// import MaterialTableDemo from './components/phonetbl';
// import getInitialStat from './combkp/phonebook_entry';
import LoginUser from './components/LoginUser';
import FixedContainer from './Container/box-fix';

function App() {
  
   const displayMessage = ()=>{
     console.log('Hello .....');
     
   }
   const Displaylink=()=>{
     console.log('Hello link'); 
    
   }
  
   return (
     <div className="App">
    <React.Fragment>
        <TitleComponent title="Page One!" />
        <Container>
        <h1>ספר טלפונים  ארגוני </h1>
        
        </Container>
        
        
    </React.Fragment>
      <LongMenu/>

      {/* <Login message="Login" showMessage={displayMessage} ShowLink={Displaylink}/> */}
      <LoginUser/>
      <FixedContainer></FixedContainer>
      <Container maxWidth="fixed">
     
        <MaterialTableDemo1>
        
        </MaterialTableDemo1>
      </Container>
     
   </div>
   );
}

export default App;
